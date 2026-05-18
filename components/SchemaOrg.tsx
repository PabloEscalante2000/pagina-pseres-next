export default function SchemaOrg() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://pseres.pe/#organization",
    name: "PSERES — Centro de Psicoterapia y Psicoeducación Infantil",
    alternateName: "PSERES",
    url: "https://pseres.pe/",
    logo: "https://pseres.pe/assets/pseres_logo.png",
    image: "https://pseres.pe/assets/pseres_logo.png",
    description:
      "Centro especializado en psicoterapia y psicoeducación infantil en Lima. Atendemos TEA, TDAH y neurodiversidad con terapias personalizadas, evaluaciones express y programa de tutora sombra.",
    medicalSpecialty: "Psychiatry",
    address: {
      "@type": "PostalAddress",
      streetAddress: "General Silva 570",
      addressLocality: "Miraflores",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    telephone: "+51966968791",
    email: "pseresperu@gmail.com",
    sameAs: [
      "https://www.instagram.com/centropseres.pe",
      "https://www.facebook.com/CentroPseres",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const employees = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "César Escalante",
      jobTitle: "Psicólogo Clínico y Psicoterapeuta",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      identifier: "CPsP: 29611",
      description:
        "Psicólogo clínico con Maestría en Neuropsicología. Psicoterapeuta psicoanalítico especializado en trastorno de personalidad, depresión y ansiedad.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Kevin Cubas",
      jobTitle: "Psicólogo Clínico",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      identifier: "CPsP: 66725",
      description:
        "Psicólogo clínico con especialización en diagnóstico e intervención en niños y adolescentes con TEA.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Catherin Cermeño Durand",
      jobTitle: "Psicóloga Clínica y Psicoterapeuta",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      identifier: "CPsP: 35863",
      description:
        "Psicóloga clínica y psicoterapeuta psicoanalítica con experiencia en primera y segunda infancia.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Melissa Huamán",
      jobTitle: "Facilitadora Psicoterapéutica Psicoanalítica",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      description:
        "Facilitadora psicoterapéutica psicoanalítica bajo supervisión clínica. Docente de teoría psicoanalítica en grupo EADES.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Natalia Escalante",
      jobTitle: "Especialista en Educación y Aprendizaje",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      description:
        "Especialista en terapia de aprendizaje para niños neurodiversos. Magíster en Educación con mención en dificultades de aprendizaje.",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Valeria Arbulú",
      jobTitle: "Facilitadora Psicoterapéutica Psicoanalítica",
      worksFor: { "@id": "https://pseres.pe/#organization" },
      description:
        "Facilitadora psicoterapéutica psicoanalítica bajo supervisión clínica. Docente de teoría psicoanalítica en grupo EADES.",
    },
  ];

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo es la primera sesión?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La primera sesión es exploratoria. Buscamos conocer al niño y a la familia, entender la situación actual y definir los objetivos del proceso terapéutico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta y cuánto tiempo dura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las sesiones duran 45 minutos y tienen un precio que varía dependiendo de la necesidad de cada paciente. Contáctanos por WhatsApp para conocer nuestras tarifas actualizadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué enfoque se trabaja en las sesiones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestras terapias integran el enfoque psicoanalítico, la dialéctica-conductual, el enfoque sistémico y el neurocognitivo postracionalista, adaptados a las necesidades de cada niño.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los padres participan en las sesiones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, la participación de los padres es fundamental. Sin embargo, esto se hace en sesiones separadas diseñadas especialmente para acompañar el proceso del niño.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cada cuánto tiempo debo llevar a mi hijo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La frecuencia de la terapia depende del diagnóstico de cada niño. Nuestro equipo diseña un plan de tratamiento personalizado para cada caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo agendar si soy menor de edad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes agendar si eres menor de edad, pero necesitaremos que te acerques a nuestras instalaciones acompañado de un tutor o adulto responsable.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      {employees.map((person, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
