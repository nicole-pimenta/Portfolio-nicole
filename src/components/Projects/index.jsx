import { StyledText1, StyledText3 } from "../../styles/typography";
import { ProjectsContainer, GithubButton } from "./style";
import project1 from "../../assets/projeto1.png";
import { BsGithub } from "react-icons/bs";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swipper.css";
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <ProjectsContainer ProjectsContainer id="projects">
      <StyledText1>Projetos</StyledText1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
          },

          600: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <h2> VolvoCars </h2>

          <button>
            <a
              href="https://god-frontend-code-test-lovat.vercel.app/"
              target="_blank"
            >
              Acesse aqui
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <h2> YourBudget </h2>

          <button>
            <a href="https://your-budget-eight.vercel.app/" target="_blank">
              Acesse aqui
            </a>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <h2> BooksList </h2>
          <button>
            <a href="https://books-list-lake.vercel.app/" target="_blank">
              Acesse aqui
            </a>
          </button>
        </SwiperSlide>
      </Swiper>

      <GithubButton>
        <BsGithub size={20} color="white" />
        <a href="https://github.com/nicole-pimenta" target="_blank">
          Veja Mais
        </a>
      </GithubButton>
    </ProjectsContainer>
  );
};

export default Projects;
