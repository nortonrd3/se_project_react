import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
    return (
        <div className="sidebar">
            <img className="sidebar__avatar" src={avatar} alt="default profile image" />
            <p className="sidebar__username">Terrence Tegegne</p>
        </div>
    )
}

export default SideBar;