export const STUDIO_FRAMES = [
  {
    id: "aero-strata",
    name: "AeroStrata RS-1 Chassi",
    category: "Aero Road",
    basePrice: 38000,
    baseWeight: 6.6,
    description: "Quadro monocoque em fibra Torayca T1100G desenvolvido em túnel de vento.",
    defaultImage: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    dragRating: "-18.4W"
  },
  {
    id: "terra-forge",
    name: "TerraForge All-Road Chassi",
    category: "Gravel & Endurance",
    basePrice: 28500,
    baseWeight: 7.8,
    description: "Geometria estável com micro-suspensão elastomérica traseira integrada.",
    defaultImage: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80",
    dragRating: "-12.1W"
  },
  {
    id: "voltapex-e",
    name: "VoltApex Hyper-E Chassi",
    category: "E-Performance",
    basePrice: 46000,
    baseWeight: 11.2,
    description: "Motor Fazua Ride 60 oculto com torque de 60Nm e bateria de 430Wh.",
    defaultImage: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80",
    dragRating: "-14.5W"
  },
  {
    id: "vortex-enduro",
    name: "Vortex Enduro 29 Chassi",
    category: "Mountain & Downhill",
    basePrice: 42000,
    baseWeight: 13.4,
    description: "Cinemática Virtual Pivot Point de 170mm de curso com amortecedor Fox Factory.",
    defaultImage: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80",
    dragRating: "All-Mountain"
  }
];

export const STUDIO_COLORS = [
  {
    id: "scuderia-red",
    name: "Rosso Corsa Velocity",
    hex: "#E31B23",
    price: 0,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "stealth-carbon",
    name: "Stealth Matte Carbon Raw",
    hex: "#161719",
    price: 1200,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "glacier-white",
    name: "Glacier White Pearl",
    hex: "#ECECEC",
    price: 1500,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cyber-cyan",
    name: "Cyber Neon Cyan",
    hex: "#00E5FF",
    price: 2200,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "desert-sand",
    name: "Dune Sand Tactical",
    hex: "#C2B280",
    price: 1800,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80"
  }
];

export const STUDIO_GROUPSETS = [
  {
    id: "dura-ace-di2",
    name: "Shimano Dura-Ace Di2 12v",
    subtitle: "Câmbio eletrônico topo de linha, trocas hiper-rápidas",
    price: 14000,
    weightDiff: 0
  },
  {
    id: "sram-red-axs",
    name: "SRAM Red eTap AXS Wireless",
    subtitle: "100% sem fios, máxima precisão e frenagem hidráulica HRD",
    price: 15500,
    weightDiff: 0.05
  },
  {
    id: "ultegra-di2",
    name: "Shimano Ultegra Di2 12v",
    subtitle: "Excelente custo-benefício de competição com tecnologia Di2",
    price: 8500,
    weightDiff: 0.22
  },
  {
    id: "sram-force-axs",
    name: "SRAM Force AXS Wireless",
    subtitle: "Transmissão sem fios robusta com medidor opcional",
    price: 9200,
    weightDiff: 0.28
  }
];

export const STUDIO_WHEELS = [
  {
    id: "velocity-aero-58",
    name: "Velocity Aero Carbon 58mm",
    subtitle: "Perfil alto para arrancadas e velocidade sustentada no plano",
    price: 9800,
    weightDiff: 0
  },
  {
    id: "velocity-climb-35",
    name: "Velocity Climbing Feather 35mm",
    subtitle: "Perfil baixo ultraleve otimizado para escaladas alpinas",
    price: 11200,
    weightDiff: -0.28
  },
  {
    id: "velocity-allroad-40",
    name: "Velocity TerraWide 40mm Hookless",
    subtitle: "Construção reforçada para resistir a impactos em cascalho e asfalto irregular",
    price: 8900,
    weightDiff: 0.15
  }
];

export const STUDIO_COCKPIT_OPTIONS = {
  sizes: ["XS (1.55m - 1.65m)", "S (1.65m - 1.75m)", "M (1.75m - 1.83m)", "L (1.83m - 1.92m)", "XL (1.92m+)"],
  stemLengths: ["90mm (Ágil)", "100mm (Equilibrado)", "110mm (Aero Pro)", "120mm (Agressivo)"],
  barWidths: ["380mm (Aero Estreito)", "400mm (Padrão Tour)", "420mm (Conforto)", "440mm (Estabilidade)"],
  finishes: ["Fosco Stealth Matte", "Brilhante Ceramic Gloss"],
  powerMeter: {
    name: "Medidor de Potência Dual-Side Integrado",
    price: 4500,
    weightDiff: 0.03
  },
  ceramicBearings: {
    name: "Rolamentos Cerâmicos CeramicSpeed (Cubo + Central)",
    price: 3800,
    weightDiff: -0.05
  }
};
