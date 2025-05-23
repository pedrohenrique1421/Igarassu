import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import List from "../../components/List";
import { useState } from "react";

export default function Dashboard() {
    const [section, setSection] = useState(1);
    const admPermission = false;
    return (
        <div
            style={{
                height: "100vh",
                overflowY: "hidden",
            }}
        >
            <Header type={"clean"} />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    backgroundColor: "#c5dfd0",
                }}
            >
                <SideBar
                    selected={section}
                    setValue={setSection}
                    admPermission={admPermission}
                />
                <List selected={section} admPermission={admPermission} />
            </div>
        </div>
    );
}
