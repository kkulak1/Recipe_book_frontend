import { logIn } from "../../utils/pathutils";
import CustomizableAppBar from "../CustomizableAppBar";
import AppBarButtonData from "../buttons/AppBarButtonData";


export default function OwnerAppBar({ children }) {
  let i = 1
  let appBarButtonsData = [
    new AppBarButtonData(i++, "A", logIn ),
    new AppBarButtonData(i++, "B", logIn ),
    new AppBarButtonData(i++, "C", logIn ),
    new AppBarButtonData(i++, "D", logIn ),
  ];

  return (
    <CustomizableAppBar
    buttonsData={appBarButtonsData}>
      {children}
    </CustomizableAppBar>
  );
}
