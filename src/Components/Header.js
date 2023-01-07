import { Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenuList, menu, OpenMenuList } from "../NavSlice";
import { CustomTheme } from "../Utilities/Theme";
const Header = () => {
  const font = CustomTheme.fonts;
  const dispatch = useDispatch();
  const menuOpened = useSelector(menu);
  return (
    <Stack
      justifyContent={"space-between"}
      position="fixed"
      sx={{
        top: 0,
        right: 0,
        zIndex: 10,
        padding: { xs: "10px 30px", sm: "20px 50px" },
      }}
      direction="row"
      spacing={"8px"}
      alignItems="center"
      component="div"
      width="100%"
    >
      <Box
        component={"p"}
        fontFamily={font.font5}
        fontWeight={700}
        fontSize="40px"
        id="logo"
      >
        BT.
      </Box>
      <Box
        component={Button}
        sx={{
          ":hover": {
            backgroundColor: "transparent",
          },
          color: "black",
        }}
        onClick={() => {
          menuOpened ? dispatch(CloseMenuList()) : dispatch(OpenMenuList());
        }}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize="20px"
          id="menu"
        >
          menu
        </Box>
      </Box>
    </Stack>
  );
};
export default Header;
