import ButtonLinkController from "./ButtonLinkController.js"
import MenuController from "./MenuController.js"

const buttonLinkController = new ButtonLinkController(".site-button")
const mainMenuController = new MenuController(
  ".menu-container",
  ".menu-toggler--mobile"
)
