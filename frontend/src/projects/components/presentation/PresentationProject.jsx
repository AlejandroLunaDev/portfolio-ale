import styles from './PresentationProject.module.scss';
import hrnexoImage from '../../../public/img/hrnexo.png';
import easyturnosImage from '../../../public/img/easyturnos.png';
import exampleImage1 from '../../../public/img/silousoecommerce.png';
import exampleImage2 from '../../../public/img/windowsclone.png';

const PresentationProject = () => {
  const projects = [
    { id: 1, imageUrl: hrnexoImage },
    { id: 1, imageUrl: hrnexoImage },
    { id: 2, imageUrl: easyturnosImage },
    { id: 2, imageUrl: easyturnosImage },
    { id: 2, imageUrl: easyturnosImage },
    { id: 2, imageUrl: easyturnosImage },
    { id: 3, imageUrl: exampleImage1 },
    { id: 3, imageUrl: exampleImage1 },
    { id: 4, imageUrl: exampleImage2 },
    { id: 4, imageUrl: exampleImage2 },
    { id: 4, imageUrl: exampleImage2 },
    { id: 4, imageUrl: exampleImage2 },
  ];

  const halfLength = Math.ceil(projects.length / 2);

  return (
    <section className={styles.projectsContainer}>
      <div className={styles.column}>
        {projects.slice(0, halfLength).map((project, index) => (
          <div key={project.id} className={styles.projectContainer}>
            <img
              src={project.imageUrl}
              alt={`Project ${project.id}`}
              className={`${styles.projectImage} ${styles.moveIn} ${styles.moveOut}`}
              style={{
                '--move-direction': '-100vw',
                animationDelay: `${index * 3}s`, // Reducir el delay para iniciar más rápido
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.column}>
        {projects.slice(halfLength).map((project, index) => (
          <div key={project.id} className={styles.projectContainer}>
            <img
              src={project.imageUrl}
              alt={`Project ${project.id}`}
              className={`${styles.projectImage} ${styles.moveOut} ${styles.moveIn}`}
              style={{
                '--move-direction': '100vw',
                animationDelay: `${index * 3}s`, // Reducir el delay para iniciar más rápido
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};


export default PresentationProject;
