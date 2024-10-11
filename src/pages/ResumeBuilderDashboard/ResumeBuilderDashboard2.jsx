import NavBar from "@/elements/NavBar";
import React, { useEffect, useState } from "react";
import "./ResumeBuilderDashboard.css";
import { BsArrowUpRight, BsPen } from "react-icons/bs";
import { useUser } from "@clerk/clerk-react";
import { getResumesByUserId } from "@/database/firebase/service";

function ResumeBuilderDashboard() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const userResumes = await getResumesByUserId(user.id);
        setResumes(userResumes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, [user]);

  useEffect(()=>{
    if(resumes != []){
      console.log("resumes",resumes)

    }

  },[resumes])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NavBar />

      <section className="projects section" id="projects">
        <h2 className="section__title-1">
          <span>Projects.</span>
        </h2>

        <div className="projects__container container grid">
          <article className="projects__card">
            <div className="projects__image">
              <img
                src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjU5NTV8&ixlib=rb-4.0.3&q=85"
                alt="image"
                className="projects__img"
              />

              <a href="#" className="projects__button button">
                <BsArrowUpRight />
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Website</h3>
              <h2 className="projects__title">Restaurant Website</h2>

              <p className="projects__description">
                Project that you carry out in the design and structure of the
                layout, showing the design at the client's request.
              </p>
            </div>

            <div className="projects__buttons">
              <a
                href="https://github.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-github-line"></i> Source Code
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img
                src="https://images.unsplash.com/photo-1491172700640-4f1a131a3670?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY2ODV8&ixlib=rb-4.0.3&q=85"
                alt="image"
                className="projects__img"
              />

              <a href="#" className="projects__button button">
                <BsArrowUpRight />
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">App</h3>
              <h2 className="projects__title">Yoga App</h2>

              <p className="projects__description">
                Project that you carry out in the design and structure of the
                layout, showing the design at the client's request.
              </p>
            </div>

            <div className="projects__buttons">
              <a
                href="https://github.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-github-line"></i> Source Code
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img
                src="https://images.unsplash.com/photo-1622431062669-ed38267b6de5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjYzNDJ8&ixlib=rb-4.0.3&q=85"
                alt="image"
                className="projects__img"
              />

              <a href="#" className="projects__button button">
                <BsArrowUpRight />
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">App</h3>
              <h2 className="projects__title">Fast Food App</h2>

              <p className="projects__description">
                Project that you carry out in the design and structure of the
                layout, showing the design at the client's request.
              </p>
            </div>

            <div className="projects__buttons">
              <a
                href="https://github.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-github-line"></i> Source Code
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img
                src="https://images.unsplash.com/photo-1515560570411-00a0026e6086?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY2MDJ8&ixlib=rb-4.0.3&q=85"
                alt="image"
                className="projects__img"
              />

              <a href="#" className="projects__button button">
                <BsArrowUpRight />
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Website</h3>
              <h2 className="projects__title">Coffee Delivery Website</h2>

              <p className="projects__description">
                Project that you carry out in the design and structure of the
                layout, showing the design at the client's request.
              </p>
            </div>

            <div className="projects__buttons">
              <a
                href="https://github.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-github-line"></i> Source Code
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>

          <article className="projects__card">
            <div className="projects__image">
              <img
                src="https://images.unsplash.com/photo-1672257493461-704902362c1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY0OTV8&ixlib=rb-4.0.3&q=85"
                alt="image"
                className="projects__img"
              />

              <a href="#" className="projects__button button">
                <BsArrowUpRight />
              </a>
            </div>

            <div className="projects__content">
              <h3 className="projects__subtitle">Website</h3>
              <h2 className="projects__title">Barbershop Website</h2>

              <p className="projects__description">
                Project that you carry out in the design and structure of the
                layout, showing the design at the client's request.
              </p>
            </div>

            <div className="projects__buttons">
              <a
                href="https://github.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-github-line"></i> Source Code
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                className="projects__link"
              >
                <i className="ri-dribbble-line"></i> View
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ResumeBuilderDashboard;
