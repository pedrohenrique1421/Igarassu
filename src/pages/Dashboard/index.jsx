import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import List from "../../components/List";

export default function Dashboard() {
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
                <SideBar selected={1} />
                <List selected={1} />
            </div>
        </div>
    );
}
