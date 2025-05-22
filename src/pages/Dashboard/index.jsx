import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import List from "../../components/List";

export default function Dashboard() {
    return (
        <div style={{ height: "100vh", backgroundColor: "#00ffff" }}>
            <Header type={"clean"} />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    backgroundColor: "#ff0000",
                }}
            >
                <SideBar />
                <List />
            </div>
        </div>
    );
}
