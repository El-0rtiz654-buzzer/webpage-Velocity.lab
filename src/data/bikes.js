export const BIKES_DATA = [
  {
    id: "aero-strata-rs1",
    name: "AeroStrata RS-1",
    tagline: "Aerodinâmica de Nível WorldTour & Máxima Rigidez",
    category: "aero-road",
    categoryLabel: "Aero Road",
    price: 48900,
    rating: 4.95,
    reviewsCount: 38,
    isFeatured: true,
    badge: "WORLD TOUR SPEC",
    description: "Projetada em túnel de vento com tubos em perfil NACA 0028 e fibra Torayca T1100G. Cada watt de energia é convertido diretamente em velocidade pura no asfalto.",
    specs: {
      weight: "6.6 kg",
      frame: "Carbono Monocoque Toray T1100G",
      groupset: "Shimano Dura-Ace Di2 12v Eletrônico",
      wheels: "Velocity Carbon Aero 58mm Tubeless",
      brakes: "Shimano Dura-Ace Disco Hidráulico (160/140mm)",
      tireClearance: "Até 32mm",
      dragReduction: "-18.4W @ 45 km/h"
    },
    colors: [
      {
        id: "stealth-black",
        name: "Stealth Matte Carbon",
        hex: "#1E1F22",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "scuderia-red",
        name: "Rosso Corsa Velocity",
        hex: "#E31B23",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "pearl-white",
        name: "Glacier White Pearl",
        hex: "#EAEAEA",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["XS (1.55-1.65m)", "S (1.65-1.75m)", "M (1.75-1.83m)", "L (1.83-1.92m)", "XL (1.92m+)"]
  },
  {
    id: "terraforge-grx-pro",
    name: "TerraForge GRX Pro",
    tagline: "Conquiste Qualquer Estrada, Asfalto ou Cascalho",
    category: "gravel",
    categoryLabel: "Gravel & All-Road",
    price: 34500,
    rating: 4.88,
    reviewsCount: 29,
    isFeatured: true,
    badge: "ALL-TERRAIN PRO",
    description: "Geometria progressiva para estabilidade em alta velocidade em estradas não pavimentadas, micro-suspensão elastomérica integrada no seatstay e clearance de até 50mm.",
    specs: {
      weight: "7.8 kg",
      frame: "Carbono T900 com Micro-Flex Traseiro",
      groupset: "SRAM Red XPLR eTap AXS 1x12v Sem Fio",
      wheels: "Velocity TerraWide 40mm Hookless Carbon",
      brakes: "SRAM Red HRD Disco Hidráulico",
      tireClearance: "Até 50mm 700c / 2.1\" 650b",
      dragReduction: "Otimizado para Endurance e Cascalho"
    },
    colors: [
      {
        id: "desert-sand",
        name: "Dune Sand Matte",
        hex: "#C2B280",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "dark-olive",
        name: "Tactical Forest Olive",
        hex: "#3D493A",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "stealth-black",
        name: "Carbon Raw",
        hex: "#1F2023",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["S (1.65-1.75m)", "M (1.75-1.84m)", "L (1.84-1.92m)"]
  },
  {
    id: "voltapex-hyper-e",
    name: "VoltApex Hyper-E",
    tagline: "Potência Assistida Oculta com Alma de Estrada",
    category: "e-bike",
    categoryLabel: "E-Performance",
    price: 56000,
    rating: 4.97,
    reviewsCount: 17,
    isFeatured: true,
    badge: "SMART ELECTRIC",
    description: "Motor ultracompacto Fazua Ride 60 perfeitamente oculto no tubo inferior com 60Nm de torque e bateria de 430Wh. Parece e roda como uma bicicleta de estrada tradicional de 11 kg.",
    specs: {
      weight: "11.2 kg (Com Bateria)",
      frame: "Carbono Toray T1000 E-Optimized",
      groupset: "Shimano Ultegra Di2 12v Sem Fio",
      motor: "Fazua Ride 60 (60Nm de torque)",
      battery: "430Wh Integrada (Removível)",
      range: "Até 140 km com 1 carga",
      connectivity: "Bluetooth, ANT+ e App Velocity Connect"
    },
    colors: [
      {
        id: "scuderia-red",
        name: "Electric Crimson",
        hex: "#E31B23",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "midnight-cyan",
        name: "Cyber Neon Cyan",
        hex: "#00E5FF",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "stealth-black",
        name: "Anodized Jet Black",
        hex: "#17181A",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["S (1.65-1.74m)", "M (1.74-1.82m)", "L (1.82-1.91m)"]
  },
  {
    id: "vortex-dh-carbon",
    name: "Vortex Enduro 29",
    tagline: "Engenharia Bruta para Descidas Extremas",
    category: "mountain",
    categoryLabel: "Mountain Pro",
    price: 52300,
    rating: 4.92,
    reviewsCount: 22,
    isFeatured: false,
    badge: "ENDURO RACING",
    description: "Cinemática Virtual Pivot Point (VPP) com 170mm de curso dianteiro e traseiro. Amortecedores FOX Factory Kashima e quadro construído com tecido de carbono multidirecional anti-impacto.",
    specs: {
      weight: "13.4 kg",
      frame: "Carbono EPS Ultra-Impact 170mm",
      groupset: "SRAM XX1 Eagle AXS 12v Wireless",
      suspension: "FOX Factory 38 Kashima Grip2 170mm",
      wheels: "Velocity DH Carbon 32 furos com cubos DT Swiss 240",
      brakes: "Shimano Saint Quad-Piston Hidráulico 203mm",
      seatpost: "FOX Transfer Factory Dropper Kashima"
    },
    colors: [
      {
        id: "lava-orange",
        name: "Magma Orange Flash",
        hex: "#FF5722",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "stealth-grey",
        name: "Battleship Matte Carbon",
        hex: "#2B2D33",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["M (1.72-1.82m)", "L (1.82-1.93m)"]
  },
  {
    id: "chronos-tt-tri",
    name: "Chronos TT Time-Trial",
    tagline: "A Máquina Mais Rápida contra o Cronômetro",
    category: "aero-road",
    categoryLabel: "Time-Trial / Tri",
    price: 64000,
    rating: 4.98,
    reviewsCount: 14,
    isFeatured: true,
    badge: "LIMITED EDITION",
    description: "Projetada para quebrar recordes de triatlo Ironman e provas contra o relógio. Sistema de hidratação interno no tubo superior, caixa de ferramentas aerodinâmica integrada e roda traseira lenticular de disco.",
    specs: {
      weight: "7.9 kg",
      frame: "Carbono Aero Extreme Aerofoil",
      groupset: "SRAM Red eTap AXS BlipBox TT 12v",
      cockpit: "Monocoque Carbon Aerobar com ajustes milimétricos",
      wheels: "Traseira Lenticular Carbon + Dianteira 80mm Aero",
      brakes: "Carenados integrados no garfo e quadro"
    },
    colors: [
      {
        id: "gloss-racing-red",
        name: "Gloss Velocity Red & Carbon",
        hex: "#E31B23",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "stealth-black",
        name: "Shadow Stealth",
        hex: "#111214",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["S (1.68-1.76m)", "M (1.76-1.84m)", "L (1.84-1.92m)"]
  },
  {
    id: "urban-velocity-carbon",
    name: "UrbanVelocity Belt-Drive",
    tagline: "Design Minimalista & Manutenção Zero para a Cidade",
    category: "urban",
    categoryLabel: "Urban Commuter",
    price: 22900,
    rating: 4.85,
    reviewsCount: 31,
    isFeatured: false,
    badge: "ZERO MAINTENANCE",
    description: "Elimine graxa e ruídos. Transmissão por correia de carbono Gates Carbon Drive com câmbio interno Shimano Alfine de 11 velocidades selado no cubo. Luzes de segurança de LED integradas no canote e guidão.",
    specs: {
      weight: "8.9 kg",
      frame: "Carbono Leve Urbano com cabeamento 100% interno",
      transmission: "Correia Gates CDX Carbon Drive (sem graxa)",
      hub: "Shimano Alfine 11v Interno Selado",
      lighting: "LEDs Dianteiro e Traseiro recarregáveis USB-C embutidos",
      brakes: "Shimano Deore Hidráulico"
    },
    colors: [
      {
        id: "satin-titanium",
        name: "Satin Titanium Grey",
        hex: "#8E939C",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80"
      },
      {
        id: "midnight-black",
        name: "Matte Midnight Obsidian",
        hex: "#1A1B1E",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    sizes: ["M (1.70-1.82m)", "L (1.82-1.92m)"]
  }
];

export const CATEGORIES = [
  { id: "all", label: "Todas as Bicicletas" },
  { id: "aero-road", label: "Aero & Estrada" },
  { id: "gravel", label: "Gravel & Aventura" },
  { id: "e-bike", label: "Elétricas de Performance" },
  { id: "mountain", label: "Mountain Pro" },
  { id: "urban", label: "Urban Commuter" }
];

export const LAB_HIGHLIGHTS = [
  {
    icon: "wind",
    title: "Aerodinâmica CFD em Túnel de Vento",
    description: "Cada seção transversal do tubo é desenhada para cortar o fluxo turbulento em ventos laterais de até 25 graus, economizando até 20 watts a 45 km/h."
  },
  {
    icon: "layers",
    title: "Fibra Torayca T1100G Aeroespacial",
    description: "Utilizamos as mesmas mantas de carbono de alta densidade desenvolvidas para a fuselagem de caças a jato, unindo rigidez torcional extrema e baixo peso."
  },
  {
    icon: "cable",
    title: "Cockpit Monocoque 100% Integrado",
    description: "Nenhum cabo, conduíte ou mangueira de freio fica exposto ao vento. O cockpit de uma peça única garante limpeza visual e cockpit rígido nos sprints."
  },
  {
    icon: "shield",
    title: "Garantia Vitalícia de Quadro & Paddock VIP",
    description: "Cada proprietário de uma VELOCITY tem garantia vitalícia de estrutura no primeiro dono e suporte direto dos nossos mecânicos do laboratório."
  }
];
