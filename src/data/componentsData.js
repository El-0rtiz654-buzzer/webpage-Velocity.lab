export const COMPONENTS_DATA = [
  {
    id: "cockpit-aero-monocoque",
    name: "Cockpit Monocoque Aero T1100G",
    category: "cockpit",
    categoryLabel: "Cockpits & Guidões",
    price: 3400,
    weight: "310g",
    badge: "AERO WORLD TOUR",
    rating: 4.96,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    description: "Guidão e avanço integrados em peça única monocoque. Roteamento de cabos 100% interno para sistemas eletrônicos e freios a disco, eliminando turbulência frontal.",
    specs: {
      material: "Fibra de Carbono Torayca T1100G",
      drop: "125mm",
      reach: "80mm",
      flare: "3 graus para maior controle no sprint",
      stemAngle: "-10 graus integrado"
    },
    sizes: ["400x90mm", "400x100mm", "420x100mm", "420x110mm", "440x120mm"]
  },
  {
    id: "wheels-ceramic-speed-58",
    name: "Par de Rodas Velocity Aero 58mm Disc",
    category: "wheels",
    categoryLabel: "Rodas & Pneus",
    price: 11800,
    weight: "1.340g (Par)",
    badge: "CERAMIC BEARINGS",
    rating: 4.98,
    reviewsCount: 28,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    description: "Aros de carbono de 58mm em perfil U aerodinâmico otimizado para pneus tubeless 28-32mm. Cubos usinados em CNC com rolamentos cerâmicos CeramicSpeed instalados de fábrica.",
    specs: {
      rimHeight: "58mm",
      internalWidth: "21mm (Hookless)",
      spokes: "Sapim CX-Ray Aero Black (24D/24T)",
      hub: "Velocity Ratchet 54T com Rolamentos Cerâmicos",
      braking: "Center Lock Disc"
    },
    sizes: ["Shimano HG 11/12v", "SRAM XDR", "Campagnolo N3W"]
  },
  {
    id: "powermeter-crankset-dual",
    name: "Medidor de Potência Dual-Side Carbon 52/36",
    category: "electronics",
    categoryLabel: "Eletrônica & Potência",
    price: 5200,
    weight: "590g",
    badge: "ACCURACY ±1%",
    rating: 4.94,
    reviewsCount: 35,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
    description: "Medição bilateral independente de potência (perna esquerda e direita), cadência e suavidade da pedalada. Transmissão dupla ANT+ e Bluetooth LE com bateria recarregável para 200h.",
    specs: {
      precision: "Precisão de ±1.0% com calibração automática",
      batteryLife: "200 horas com carregador magnético USB-C",
      connectivity: "Bluetooth 5.0, ANT+ FE-C",
      chainrings: "52/36D usinadas em alumínio aero 7075-T6",
      crankLength: "170mm, 172.5mm, 175mm"
    },
    sizes: ["170mm (52/36)", "172.5mm (52/36)", "175mm (50/34)"]
  },
  {
    id: "helmet-aero-wind-speed",
    name: "Capacete Aero Velocity Stratos",
    category: "apparel",
    categoryLabel: "Vestuário & Capacetes",
    price: 1890,
    weight: "220g",
    badge: "WIND TUNNEL TESTED",
    rating: 4.91,
    reviewsCount: 51,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80",
    description: "Desenvolvido em túnel de vento com canais internos de venturi para manter a cabeça refrigerada enquanto dissipa a resistência do ar a mais de 50 km/h. Viseira magnética Carl Zeiss inclusa.",
    specs: {
      safetySystem: "MIPS Air Node integrado no acolchoamento",
      ventilation: "5 entradas frontais + 4 saídas de exaustão",
      visor: "Magnética removível com proteção UV400",
      retention: "Disco micrométrico com ajuste vertical e occipital"
    },
    sizes: ["S (51-55cm)", "M (55-59cm)", "L (59-63cm)"]
  },
  {
    id: "gps-computer-telemetry",
    name: "Ciclocomputador GPS Velocity Apex 500",
    category: "electronics",
    categoryLabel: "Eletrônica & Potência",
    price: 2850,
    weight: "95g",
    badge: "SMART TELEMETRY",
    rating: 4.89,
    reviewsCount: 23,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
    description: "Tela colorida transflectiva visível sob sol direto, navegação curva a curva em mapa mundial offline, estimativa de arrasto aerodinâmico em tempo real e integração com o Paddock App.",
    specs: {
      display: "Tela colorida Gorilla Glass 2.8\" tátil",
      batteryLife: "Até 35 horas de navegação contínua",
      gps: "Multi-band GNSS (GPS, GLONASS, Galileo, BeiDou)",
      sensors: "Radar de aproximação, câmbios Di2/AXS, potência e FC"
    },
    sizes: ["Padrão com Suporte Aero de Avanço"]
  },
  {
    id: "torque-wrench-micrometric",
    name: "Torquímetro Digital de Paddock 1-20 Nm",
    category: "maintenance",
    categoryLabel: "Manutenção & Ferramentas",
    price: 980,
    weight: "340g",
    badge: "LAB GRADE PRECISION",
    rating: 4.97,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    description: "Ferramenta essencial para preservação de quadros e componentes de carbono. Alerta sonoro e luminoso ao atingir o torque exato de aperto para evitar trincas estruturais.",
    specs: {
      range: "1.0 a 20.0 Nm com precisão de ±1.5%",
      bits: "Bits de precisão Allen 2, 2.5, 3, 4, 5, 6mm e Torx T10, T20, T25",
      calibration: "Certificado de calibração laboratorial incluso",
      casing: "Estojo rígido usinado em alumínio anodizado"
    },
    sizes: ["Kit Completo com 12 Bits"]
  },
  {
    id: "carbon-bottle-cage-ultralight",
    name: "Suporte de Caramanhola Carbon Feather 16g",
    category: "cockpit",
    categoryLabel: "Cockpits & Acessórios",
    price: 320,
    weight: "16g",
    badge: "ULTRALIGHT",
    rating: 4.93,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    description: "Laminado em peça única com fibra Toray T800. Retenção firme em pisos irregulares e cascalho sem adicionar peso perceptível ao chassi.",
    specs: {
      weight: "Apenas 16 gramas por unidade",
      bolts: "Parafusos em liga de titânio anodizado preto inclusos",
      compatibility: "Compatível com garrafas padrão 74mm"
    },
    sizes: ["Acabamento Carbono Fosco", "Acabamento Carbono Brilhante"]
  },
  {
    id: "chain-lube-graphene-wax",
    name: "Lubrificante de Corrente Graphene Velocity Wax",
    category: "maintenance",
    categoryLabel: "Manutenção & Ferramentas",
    price: 195,
    weight: "120ml",
    badge: "LOW FRICTION",
    rating: 4.99,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
    description: "Formulação à base de cera enriquecida com nanopartículas de grafeno puro. Economia comprovada de até 5 watts de atrito na transmissão e não acumula sujeira.",
    specs: {
      durability: "Até 600 km de operação limpa e silenciosa em seco",
      savings: "-5.2 watts de perda mecânica na relação",
      application: "Aplicação por gotejamento na corrente limpa"
    },
    sizes: ["Frasco 120ml de Aplicação Direta"]
  }
];

export const ACCESSORY_CATEGORIES = [
  { id: "all", label: "Todos os Componentes" },
  { id: "cockpit", label: "Cockpits & Guidões" },
  { id: "wheels", label: "Rodas & Rolamentos" },
  { id: "electronics", label: "Eletrônica & Potência" },
  { id: "apparel", label: "Vestuário & Capacetes" },
  { id: "maintenance", label: "Manutenção & Paddock" }
];
