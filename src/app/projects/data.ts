import { Project } from "../types";

export const projects: Project[] = [
    {
        id: "biking_club_prototype",
        title: "Biking Club Prototype Website",
        shortDescription: "This is a test project.",
        imageNames: ["cover"],
        tags: ["School", "Prototype"],
    },
    {
        id: "soccer_club",
        title: "Soccer Club Website",
        shortDescription: "This is a test project.",
        imageNames: ["cover"],
        tags: ["School", "PHP"],
    },
    {
        id: "monsters_of_the_night",
        title: "Monsters of the Night (App)",
        shortDescription: "A React application for a custom designed social deduction game named Monsters of the Night, heavily inspired by Blood on the Clocktower.",
        imageNames: ["cover", "cover-photo"],
        tags: ["React"],
        introduction:
            `At the time of learning how to create <strong>mobile apps</strong> using <strong>React</strong>, my family had been enjoying the game <strong>Werewolves</strong> a lot. Upon doing more research on the topic of <strong>social deduction games</strong>, I stumbled upon a game named <strong>Blood on the Clocktower</strong>. This is another social deduction game played in-person, heavily praised for its ingenious design.\n
            That game contains a narrator, who guides the entire story. At the start of the game, some players are randomly assigned a character with the role of townsfolk, neutral, minion or monster. Each of these roles has several characters that can be chosen from, each with their own unique game mechanics. Every night, the narrator wakes up the townsfolk in a certain order, by tapping their shoulder. Every day, the townsfolk get together and vote on who they presume is the monster. If the monster is voted out, the townsfolk win. If the monster outlives the townsfolk, the evil team wins.\n
            With the complexity that comes with playing and narrating this game, I saw my opportunity to utilize my newly learned development skills to create a mobile app using React.`,
        description:
            `Monsters of the Night is a game in the genre of social deduction. The app is used as a <strong>tool</strong> to make the task of the <strong>host</strong> easier during the gameplay. Social deduction games similar to this often have a <strong>specific order</strong> in which characters must be awoken at night and sequences in which events must be played out. However, with distinctly chosen characters comes a distinct order of events.\n
            The app allows the host to input the <strong>number of players</strong> at the start. After this, the host selects the <strong>roles</strong> for each player. The game is then initiated, dictating the order of events on screen. Depending on the actions taken, players are <strong>eliminated</strong>, meaning they no longer show up in the event sequence if their character has no actions. Once a <strong>win condition</strong> is met, the game ends, showing the winning team in the app.`
    },
    {
        id: "language_game",
        title: "Language Game (AR)",
        shortDescription: "This is a test project.",
        imageNames: ["cover"],
        tags: ["School", "Flutter", "Wikitude"],
    },
];