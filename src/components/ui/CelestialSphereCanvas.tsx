"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface NodeData {
  id: string;
  name: string;
  baseAngle: number;
}

const NODES: NodeData[] = [
  { id: "ux", name: "UX RESEARCH", baseAngle: Math.PI * 0.95 },
  { id: "figma", name: "FIGMA", baseAngle: -Math.PI * 0.35 },
  { id: "systems", name: "DESIGN SYSTEMS", baseAngle: Math.PI * 0.15 },
];

export default function CelestialSphereCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cached text label DOM references
  const labelRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.6);

    // 3. WebGL Renderer with High-DPI & Antialiasing
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 4. Matte Ceramic 3D Sphere (Z-Buffer depth tested)
    const sphereRadius = 1.48;
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfded5,
      roughness: 0.52,
      metalness: 0.04,
      depthTest: true,
      depthWrite: true,
    });
    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    // 5. Tilted Saturn Orbital Glowing Ring
    const ringGroup = new THREE.Group();
    const ringRadius = 2.52;
    const ringTube = 0.013;
    const ringGeo = new THREE.TorusGeometry(ringRadius, ringTube, 32, 200);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 2.6,
      roughness: 0.1,
      depthTest: true,
      depthWrite: true,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringGroup.add(ringMesh);

    // Saturn Angle matching reference image
    ringGroup.rotation.x = Math.PI * 0.38;
    ringGroup.rotation.z = -Math.PI * 0.16;
    scene.add(ringGroup);

    // 6. Unified Native WebGL Leader Lines (5 Lines = 10 Vertices = 30 floats)
    const linePositions = new Float32Array(5 * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setDrawRange(0, 10);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.38,
      depthTest: true,
      depthWrite: false,
    });
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 7. Unified Native WebGL Glowing Anchor Dots (5 Points)
    const dotPositions = new Float32Array(5 * 3);
    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute("position", new THREE.BufferAttribute(dotPositions, 3));
    dotGeometry.setDrawRange(0, 5);

    // Circular glowing point sprite texture
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 64;
    dotCanvas.height = 64;
    const dctx = dotCanvas.getContext("2d")!;
    const dgrad = dctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    dgrad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    dgrad.addColorStop(0.3, "rgba(255, 255, 255, 0.85)");
    dgrad.addColorStop(0.6, "rgba(250, 245, 235, 0.3)");
    dgrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    dctx.fillStyle = dgrad;
    dctx.fillRect(0, 0, 64, 64);
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const dotMaterial = new THREE.PointsMaterial({
      size: 16,
      map: dotTexture,
      transparent: true,
      opacity: 0.95,
      depthTest: true,
      depthWrite: false,
      sizeAttenuation: false,
    });
    const dotsMesh = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dotsMesh);

    // 8. Directional Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xfff7ec, 3.8);
    keyLight.position.set(5.5, 5.5, 4.2);
    scene.add(keyLight);

    const ambientLight = new THREE.AmbientLight(0x35322b, 1.4);
    scene.add(ambientLight);

    const fillLight = new THREE.DirectionalLight(0xb2aca0, 0.65);
    fillLight.position.set(-5.0, -3.0, 1.5);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 0.85);
    topRimLight.position.set(0.5, 6.0, -2.0);
    scene.add(topRimLight);

    // 9. Soft Ambient Floor Contact Shadow
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sctx = shadowCanvas.getContext("2d")!;
    const sgrad = sctx.createRadialGradient(128, 128, 0, 128, 128, 120);
    sgrad.addColorStop(0, "rgba(0, 0, 0, 0.75)");
    sgrad.addColorStop(0.35, "rgba(10, 9, 8, 0.42)");
    sgrad.addColorStop(0.7, "rgba(20, 18, 16, 0.14)");
    sgrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    sctx.fillStyle = sgrad;
    sctx.fillRect(0, 0, 256, 256);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlaneGeo = new THREE.PlaneGeometry(5.2, 3.0);
    const shadowPlaneMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.position.set(0.1, -sphereRadius - 0.08, 0);
    shadowPlane.rotation.x = -Math.PI / 2;
    scene.add(shadowPlane);

    // 10. Pre-allocated Reusable Vectors (Zero GC Allocation)
    const vLocal = new THREE.Vector3();
    const vWorld = new THREE.Vector3();
    const vTargetWorld = new THREE.Vector3();
    const vProjected = new THREE.Vector3();
    const vSpherePos = new THREE.Vector3();

    // 11. ResizeObserver with High-DPI Support
    let cssWidth = container.clientWidth;
    let cssHeight = container.clientHeight;

    const handleResize = () => {
      if (!container) return;
      cssWidth = container.clientWidth;
      cssHeight = container.clientHeight;
      if (cssWidth === 0 || cssHeight === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      camera.aspect = cssWidth / cssHeight;
      if (cssWidth < 640) {
        camera.position.z = 10.4;
      } else if (cssWidth < 1024) {
        camera.position.z = 9.4;
      } else {
        camera.position.z = 8.6;
      }
      camera.updateProjectionMatrix();

      renderer.setSize(cssWidth, cssHeight, false);
      renderer.setPixelRatio(dpr);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    handleResize();

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    // 12. Interactive Mouse Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx * 0.10;
      mouse.targetY = ny * 0.08;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 13. Screen Projection Helper
    const projectToScreenCoords = (vec: THREE.Vector3, out: { x: number; y: number }) => {
      vProjected.copy(vec).project(camera);
      out.x = (vProjected.x + 1) * 0.5 * cssWidth;
      out.y = (-vProjected.y + 1) * 0.5 * cssHeight;
    };

    const topScreen = { x: 0, y: 0 };
    const botScreen = { x: 0, y: 0 };
    const nodeScreen = { x: 0, y: 0 };

    // 14. 60/120 FPS High-Performance Delta-Time Loop
    let lastTime = performance.now();
    let orbitAngle = 0;
    let totalElapsed = 0;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.064);
      lastTime = currentTime;
      totalElapsed += deltaTime;

      if (!prefersReducedMotion) {
        orbitAngle += deltaTime * 0.18; // Constant smooth rotational velocity
      }

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Gentle sphere float
      const floatY = Math.sin(totalElapsed * 1.2) * 0.025;
      sphereMesh.position.y = floatY + mouse.y * 0.12;
      sphereMesh.position.x = mouse.x * 0.18;

      ringGroup.position.y = floatY + mouse.y * 0.12;
      ringGroup.position.x = mouse.x * 0.18;

      // Rotate ring mesh
      ringMesh.rotation.z = orbitAngle;

      // Parallax ring tilt
      ringGroup.rotation.z = -Math.PI * 0.16 + mouse.x * 0.03;
      ringGroup.rotation.x = Math.PI * 0.38 + mouse.y * 0.02;

      shadowPlane.position.y = -sphereRadius - 0.08 + floatY * 0.2;
      shadowPlane.position.x = 0.1 + mouse.x * 0.1;

      // Update matrices before line & point vertex calculation
      sphereMesh.updateMatrixWorld(true);
      ringGroup.updateMatrixWorld(true);
      vSpherePos.copy(sphereMesh.position);

      const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const dotAttr = dotGeometry.attributes.position as THREE.BufferAttribute;

      // ── LINE 0 & DOT 0: TOP POLE (UI/UX DESIGN) ──
      vLocal.set(0, sphereRadius, 0);
      vWorld.copy(vLocal).applyMatrix4(sphereMesh.matrixWorld);
      vTargetWorld.set(vWorld.x, vWorld.y + 0.52, vWorld.z);

      posAttr.setXYZ(0, vWorld.x, vWorld.y, vWorld.z);
      posAttr.setXYZ(1, vTargetWorld.x, vTargetWorld.y, vTargetWorld.z);
      dotAttr.setXYZ(0, vWorld.x, vWorld.y, vWorld.z);

      projectToScreenCoords(vTargetWorld, topScreen);
      const topLabel = labelRefs.current["top"];
      if (topLabel) {
        topLabel.style.transform = `translate3d(${topScreen.x}px, ${topScreen.y - 6}px, 0) translate(-50%, -100%)`;
      }

      // ── LINE 1 & DOT 1: BOTTOM POLE (REACT & NEXT.JS) ──
      vLocal.set(0, -sphereRadius, 0);
      vWorld.copy(vLocal).applyMatrix4(sphereMesh.matrixWorld);
      vTargetWorld.set(vWorld.x, vWorld.y - 0.52, vWorld.z);

      posAttr.setXYZ(2, vWorld.x, vWorld.y, vWorld.z);
      posAttr.setXYZ(3, vTargetWorld.x, vTargetWorld.y, vTargetWorld.z);
      dotAttr.setXYZ(1, vWorld.x, vWorld.y, vWorld.z);

      projectToScreenCoords(vTargetWorld, botScreen);
      const botLabel = labelRefs.current["bot"];
      if (botLabel) {
        botLabel.style.transform = `translate3d(${botScreen.x}px, ${botScreen.y + 6}px, 0) translate(-50%, 0%)`;
      }

      // ── LINES 2, 3, 4 & DOTS 2, 3, 4: ROTATING ORBITAL NODES ──
      NODES.forEach((node, idx) => {
        const currentAngle = node.baseAngle + orbitAngle;
        vLocal.set(
          Math.cos(currentAngle) * ringRadius,
          Math.sin(currentAngle) * ringRadius,
          0
        );
        vWorld.copy(vLocal).applyMatrix4(ringGroup.matrixWorld);

        // 3D outward normal vector along the leader line
        const dirX = vWorld.x - vSpherePos.x;
        const dirY = vWorld.y - vSpherePos.y;
        const dirZ = vWorld.z - vSpherePos.z;
        const len = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ) || 1;
        const leaderLen3D = 0.46;

        vTargetWorld.set(
          vWorld.x + (dirX / len) * leaderLen3D,
          vWorld.y + (dirY / len) * leaderLen3D,
          vWorld.z + (dirZ / len) * leaderLen3D
        );

        const lineIdx = (2 + idx) * 2;
        posAttr.setXYZ(lineIdx, vWorld.x, vWorld.y, vWorld.z);
        posAttr.setXYZ(lineIdx + 1, vTargetWorld.x, vTargetWorld.y, vTargetWorld.z);
        dotAttr.setXYZ(2 + idx, vWorld.x, vWorld.y, vWorld.z);

        // Continuous Hermite Smoothstep Occlusion Fade
        const dX = vWorld.x - vSpherePos.x;
        const dY = vWorld.y - vSpherePos.y;
        const dXY = Math.sqrt(dX * dX + dY * dY);
        const isBehindSphere = vWorld.z < vSpherePos.z;

        let nodeOpacity = 1.0;
        if (isBehindSphere) {
          const t = Math.max(0, Math.min(1, (dXY - (sphereRadius - 0.12)) / 0.48));
          nodeOpacity = t * t * (3 - 2 * t);
        }

        projectToScreenCoords(vTargetWorld, nodeScreen);
        const label = labelRefs.current[node.id];
        if (label) {
          const angle = Math.atan2(dirY, dirX);
          const continuousOffsetX = Math.cos(angle) * 10;
          const continuousOffsetY = Math.sin(angle) * 6;

          label.style.transform = `translate3d(${nodeScreen.x + continuousOffsetX}px, ${nodeScreen.y + continuousOffsetY}px, 0) translate(-50%, -50%)`;
          label.style.opacity = nodeOpacity.toFixed(3);
        }
      });

      posAttr.needsUpdate = true;
      dotAttr.needsUpdate = true;

      // ── RENDER 3D SCENE ──
      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      dotTexture.dispose();
      shadowPlaneGeo.dispose();
      shadowPlaneMat.dispose();
      shadowTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] flex items-center justify-center select-none overflow-visible will-change-transform"
    >
      {/* Unified 3D WebGL Canvas (Sphere, Ring, Leader Lines, Anchor Dots) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />

      {/* HTML Typography Labels with Continuous Smooth Polar Offsets */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-visible">
        {/* Top Label */}
        <div
          ref={(el) => { labelRefs.current["top"] = el; }}
          className="absolute top-0 left-0 text-[11px] font-grotesk tracking-[0.2em] font-medium text-[#dedcd2] uppercase whitespace-nowrap will-change-transform"
        >
          UI/UX DESIGN
        </div>

        {/* Bottom Label */}
        <div
          ref={(el) => { labelRefs.current["bot"] = el; }}
          className="absolute top-0 left-0 text-[11px] font-grotesk tracking-[0.2em] font-medium text-[#dedcd2] uppercase whitespace-nowrap will-change-transform"
        >
          REACT &amp; NEXT.JS
        </div>

        {/* Rotating Labels */}
        {NODES.map((node) => (
          <div
            key={`label-${node.id}`}
            ref={(el) => { labelRefs.current[node.id] = el; }}
            className="absolute top-0 left-0 text-[11px] font-grotesk tracking-[0.2em] font-medium text-[#dedcd2] uppercase whitespace-nowrap will-change-transform"
          >
            {node.name}
          </div>
        ))}
      </div>
    </div>
  );
}
