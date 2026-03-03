import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const contentRef = useScrollReveal();

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();
    // Reduced fog density significantly to make the chair pop more
    scene.fog = new THREE.FogExp2(0x050505, 0.0005);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 350; // Moved back slightly
    camera.position.y = 80; // Moved up

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 5.0); // Increased from 3.0
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Increased from 8
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    const rimLight = new THREE.SpotLight(0xffffff, 50);
    rimLight.position.set(0, 100, -50);
    rimLight.lookAt(0, 0, 0);
    scene.add(rimLight);

    // New Spotlight shining down
    const spotLight = new THREE.SpotLight(0xffffff, 100);
    spotLight.position.set(0, 200, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.5;
    spotLight.lookAt(0, 0, 0);
    scene.add(spotLight);

    const fillLight = new THREE.PointLight(0x4444ff, 4, 500);
    fillLight.position.set(-100, 0, 100);
    scene.add(fillLight);

    const greenLight = new THREE.PointLight(0x36ab62, 8, 300);
    greenLight.position.set(-100, 100, 100);
    scene.add(greenLight);

    const greenLight2 = new THREE.PointLight(0x36ab62, 8, 300);
    greenLight2.position.set(100, -50, 100);
    scene.add(greenLight2);

    // Extra reflection light
    const topLight = new THREE.PointLight(0xffffff, 5, 400);
    topLight.position.set(0, 100, 0);
    scene.add(topLight);

    // Chair Group
    const chair = new THREE.Group();
    chair.position.y = 20; // Lowered slightly to center behind text
    scene.add(chair);

    // Materials
    const blackMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x111111, 
      roughness: 0.3, 
      metalness: 0.7 
    });
    
    const greenMetallicMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x36ab62, 
      roughness: 0.1, 
      metalness: 0.9,
      emissive: 0x0a2e15,
      emissiveIntensity: 0.2
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, 
      roughness: 0.05, 
      metalness: 1.0 
    });

    // --- Geometry Construction ---

    // Seat
    const seatGeo = new THREE.BoxGeometry(60, 8, 60);
    const seat = new THREE.Mesh(seatGeo, blackMaterial);
    chair.add(seat);

    // Backrest
    const backGeo = new THREE.BoxGeometry(50, 70, 6);
    const back = new THREE.Mesh(backGeo, blackMaterial);
    back.position.set(0, 40, -28);
    back.rotation.x = -0.1;
    chair.add(back);

    // Backrest Frame (Green Accent)
    const backFrameGeo = new THREE.BoxGeometry(52, 72, 2);
    const backFrame = new THREE.Mesh(backFrameGeo, greenMetallicMaterial);
    backFrame.position.set(0, 40, -29);
    backFrame.rotation.x = -0.1;
    chair.add(backFrame);

    // Armrests
    const armGeo = new THREE.BoxGeometry(4, 30, 40);
    
    const leftArm = new THREE.Mesh(armGeo, blackMaterial);
    leftArm.position.set(-32, 20, 0);
    chair.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, blackMaterial);
    rightArm.position.set(32, 20, 0);
    chair.add(rightArm);

    // Armrest Supports (Green)
    const armSupportGeo = new THREE.CylinderGeometry(2, 2, 20);
    
    const leftSupport = new THREE.Mesh(armSupportGeo, greenMetallicMaterial);
    leftSupport.position.set(-32, 5, 10);
    chair.add(leftSupport);

    const rightSupport = new THREE.Mesh(armSupportGeo, greenMetallicMaterial);
    rightSupport.position.set(32, 5, 10);
    chair.add(rightSupport);

    // Base Column
    const columnGeo = new THREE.CylinderGeometry(4, 4, 40);
    const column = new THREE.Mesh(columnGeo, chromeMaterial);
    column.position.set(0, -24, 0);
    chair.add(column);

    // Base Legs (Star)
    const legGeo = new THREE.BoxGeometry(4, 4, 35);
    const legGroup = new THREE.Group();
    legGroup.position.set(0, -44, 0);
    
    for (let i = 0; i < 5; i++) {
      const leg = new THREE.Mesh(legGeo, greenMetallicMaterial);
      const angle = (i / 5) * Math.PI * 2;
      leg.rotation.y = angle;
      leg.position.x = Math.sin(angle) * 15;
      leg.position.z = Math.cos(angle) * 15;
      legGroup.add(leg);

      // Wheels
      const wheelGeo = new THREE.CylinderGeometry(3, 3, 2);
      const wheel = new THREE.Mesh(wheelGeo, blackMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.x = Math.sin(angle) * 32;
      wheel.position.z = Math.cos(angle) * 32;
      wheel.position.y = -4;
      legGroup.add(wheel);
    }
    chair.add(legGroup);

    // Initial Rotation
    chair.rotation.y = -0.5;
    chair.rotation.x = 0.1;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      targetRotationY = mouseX * 0.0005;
      targetRotationX = mouseY * 0.0005;

      // Smooth ease
      chair.rotation.y += 0.05 * (targetRotationY - chair.rotation.y);
      chair.rotation.x += 0.05 * (targetRotationX - chair.rotation.x);

      // Idle float
      chair.position.y = 20 + Math.sin(Date.now() * 0.001) * 5;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-[var(--header-height)] overflow-hidden bg-[radial-gradient(circle_at_center,#2a4e35_0%,#0a0a0a_100%)] pb-24 pt-96">
      <div ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[1]" />
      
      <div ref={contentRef} className="container mx-auto px-6 relative z-10 text-center pointer-events-none reveal">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczOUnmQzjX4883e4wJfa9LZMiEF791g7x4Akcvu8CS4ylVNIpoNk6wtAXtwPiwhImIgXCshziBTJnntcKBQSRWGDey9rypEOveoqv33dTZxPiMTPrTpTdk1xki4cc1hn0wEAf-TyxBGFf4ccsPfWw3WH=w1260-h366-s-no-gm?authuser=0" 
          alt="333 Live Logo" 
          className="w-[420px] max-w-[80%] h-auto mb-8 inline-block" 
          referrerPolicy="no-referrer"
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] uppercase">
          A REAL{' '}
          <span className="group relative inline-block cursor-pointer" style={{ perspective: '1000px' }}>
            <span className="relative inline-block transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
              <span className="block [backface-visibility:hidden]">TURNAROUND</span>
              <span className="absolute inset-0 block [backface-visibility:hidden] [transform:rotateX(180deg)] text-accent-gradient drop-shadow-[0_0_15px_rgba(54,171,98,0.8)]">
                TURNAROUND
              </span>
            </span>
          </span>{' '}
          STORY <br/>
          <span className="text-accent-gradient drop-shadow-[0_0_20px_rgba(54,171,98,0.6)]">POWERED BY HIRING</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          We’re rebuilding 3 Thirty 3 Live in Burlington, NC in 60 days. We’re proposing ZipRecruiter as the Exclusive Hiring Partner featured in the show.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap pointer-events-auto">
          <a href="#contact" className="btn btn-primary">Schedule a 15-min Call</a>
          <a href="#sponsorship" className="btn btn-secondary">See Sponsorship Proposal</a>
        </div>
      </div>
    </section>
  );
}
