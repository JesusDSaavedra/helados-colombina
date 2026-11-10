/**
 * Legal texts shown on /legal. Each section gets its own anchor (#id)
 * so the footer and forms can link straight to it.
 */

export interface LegalBlock {
  subtitle?: string;
  paragraphs: string[];
}

export interface LegalSection {
  id: string;
  title: string;
  /** Short label for the footer and the page index. */
  shortTitle: string;
  icon: string;
  blocks: LegalBlock[];
}

export const legalSections: LegalSection[] = [
  {
    id: 'datos-personales',
    title: 'Política de tratamiento de datos personales',
    shortTitle: 'Tratamiento de datos',
    icon: 'lucide:database',
    blocks: [
      {
        paragraphs: [
          'En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, los datos personales recopilados a través de los formularios de la página serán utilizados únicamente para los fines informados al usuario, como gestionar inscripciones al Tour Escolar, atender solicitudes y enviar novedades cuando exista autorización.',
          'Los usuarios podrán conocer, actualizar, corregir o solicitar la eliminación de sus datos personales, así como revocar su autorización, a través de los canales de contacto habilitados por el responsable del tratamiento.',
        ],
      },
    ],
  },
  {
    id: 'privacidad',
    title: 'Política de privacidad',
    shortTitle: 'Privacidad',
    icon: 'lucide:lock',
    blocks: [
      {
        paragraphs: [
          'Colombina protege la información personal de sus visitantes y garantiza su confidencialidad. Los datos recopilados no serán utilizados para finalidades diferentes a las autorizadas ni compartidos con terceros sin autorización o fundamento legal.',
          'Se implementarán medidas de seguridad para evitar el acceso, uso o divulgación no autorizada de la información.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Política de cookies',
    shortTitle: 'Cookies',
    icon: 'lucide:cookie',
    blocks: [
      {
        paragraphs: [
          'Se utilizarán cookies propias y de terceros para garantizar el funcionamiento de la página, recordar preferencias, analizar la navegación y mejorar la experiencia del usuario.',
          'Los usuarios deberán contar con información clara sobre su utilización y disponer de opciones para aceptar, rechazar o configurar las cookies no esenciales, cuando se utilicen tecnologías de seguimiento que impliquen tratamiento de datos personales.',
        ],
      },
    ],
  },
  {
    id: 'terminos',
    title: 'Términos y condiciones de uso',
    shortTitle: 'Términos y condiciones',
    icon: 'lucide:file-text',
    blocks: [
      {
        paragraphs: [
          'El acceso y navegación en la página implica el compromiso de hacer un uso adecuado de sus contenidos y funcionalidades.',
          'La información sobre productos, experiencias y actividades se presenta con fines informativos. Los usuarios se comprometen a suministrar información verídica al diligenciar los formularios y a no utilizar la plataforma para actividades indebidas.',
        ],
      },
    ],
  },
  {
    id: 'menores',
    title: 'Protección de datos de menores de edad',
    shortTitle: 'Menores de edad',
    icon: 'lucide:shield-check',
    blocks: [
      {
        paragraphs: [
          'Debido a que la página contempla actividades dirigidas a instituciones educativas, se tendrá especial cuidado con la información de niños, niñas y adolescentes.',
          'En caso de recopilar datos personales de menores, se deberá contar con la autorización de su representante legal, respetar su interés superior y garantizar sus derechos fundamentales, de acuerdo con la legislación colombiana.',
        ],
      },
      {
        subtitle: 'Uso de imagen y voz durante el Tour Escolar',
        paragraphs: [
          'Durante el desarrollo del Tour Escolar podrán realizarse registros fotográficos y audiovisuales de los participantes con fines informativos, institucionales y promocionales.',
          'Debido a que la actividad involucra niños, niñas y adolescentes, será indispensable contar con la autorización previa, expresa e informada de sus padres o representantes legales para la captura, utilización y publicación de su imagen y voz en medios oficiales de Colombina, como redes sociales, página web y demás canales de comunicación de la marca.',
          'Esta autorización deberá respetar el interés superior del menor y su derecho a la intimidad y propia imagen. La participación en el Tour no deberá condicionarse a aceptar el uso promocional de su imagen.',
        ],
      },
    ],
  },
];

export const copyright = 'Colombina. Todos los derechos reservados.';
