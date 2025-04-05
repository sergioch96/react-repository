import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "sergioch96", name: "Sergio Chamorro", IsFollowing: true },
  { userName: "midudev", name: "Miguel Angel Durán", IsFollowing: false },
  { userName: "pheralb", name: "Pablo Hernandez", IsFollowing: true },
  { userName: "TMChein", name: "Tomas Chein", IsFollowing: false },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, IsFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={IsFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
