import { StyledH2, StyledlabelBold } from "../../Styles/Tipograpy";
import { NameContain } from "./StyleContainHome";
import { useContext} from "react";
import { UserContext } from "../../providers/UserContexts";

export const HomeContain = () => {
  const {user} = useContext(UserContext)
  return (
    <NameContain>
      <StyledH2>Ola, {user.name} </StyledH2>
      <StyledlabelBold>{user.course_module}</StyledlabelBold>
    </NameContain>
  );
};
