import { Box,Stack } from "@mui/material";
// import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Projects } from "../Data/ProjectsData";
import { CustomTheme } from "../Utilities/Theme";
import Header from "../Components/Header";
function Project() {
  const { fonts } = CustomTheme;
  const { project } = useParams();
  const CurrentProject = Projects.find((pro) => pro.nam === project);
  const nextProject = () => {
    if (CurrentProject.id === 3) {
      return Projects[0].nam;
    }
    let index = CurrentProject.id + 1;
    return Projects[index - 1].nam;
  };
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Box height={"88vh"} sx={{ bgcolor: "black" }} position="relative">
        <Box
          component={"p"}
          fontWeight={300}
          fontFamily={fonts.font5}
          fontSize={{ xs: "11vw", md: "12vw" }}
          letterSpacing={{ xs: "-1px", md: "-5px" }}
          color="whitesmoke"
          sx={{
            position: "absolute",
            top: "60%",
            right: "50%",
            transform: "translateX(50%)",
          }}
        >
          {CurrentProject.tag}
        </Box>
      </Box>
      <Stack
        direction={"column"}
        alignItems="center"
        width={"100%"}
        justifyContent="center"
        marginTop={"8rem"}
        paddingBottom={"1rem"}
      >
        <Box
          component={"p"}
          fontWeight={300}
          fontFamily={fonts.font5}
          fontSize={{ xs: "5vw", md: "2vw" }}
          letterSpacing={{ xs: "0px", md: "-1px" }}
          color="white"
          width={{ xs: "100%", md: "60%" }}
        >
          {CurrentProject.desc}
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="center"
          spacing={{ xs: "80px", md: "130px" }}
          marginTop="150px"
          width={{ xs: "100%", md: "60%" }}
        >
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth="50px"
            >
              ROLE
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.cate}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth={"100px"}
            >
              FEATURES
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.feauters}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth="40px"
            >
              URL
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.tag}
            </Box>
          </Stack>
        </Stack>
        <Box
          component={"p"}
          fontWeight={300}
          fontFamily={fonts.font5}
          fontSize={{ xs: "11vw", md: "5vw" }}
          letterSpacing={{ xs: "-1px", md: "-1px" }}
          color="white"
          width={"60%"}
          textAlign="center"
          marginTop={"7rem"}
          onClick={() => navigate(`/work/${nextProject()}`, { replace: true })}
        >
          Next Project
        </Box>
      </Stack>
    </Box>
  );
}

export default Project;