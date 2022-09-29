const allEvents = [
    {
        id: 1,
        title: "TALK ABOUT THE ROLE OF AI/ML IN COGNITIVE SCIENCE APPLICATIONS",
        edate: {
            date: "16",
            month: "July",
            year: "2022",
        },
        image: 'https://res.cloudinary.com/dotl5onov/image/upload/v1663501525/bmsce_acm/Events/AI_in_cog_sci/Screenshot_2022-09-18_171436_qhuq4d.png',
        status: "Completed",
        label: "Talk",
        description: "The talk was organized to share the insights on the various applications of AI & ML in cognitive science. Dr. G R Sinha has received Ph.D. from Chhattisgarh Swami Vivekanand Technical University, Bhilai. Prior to IIITB, he was working as Professor at the IIITB-mentored Myanmar Institute of Information Technology (MIIT), Mandalay, Myanmar. He emphasized the importance of the Brain-computer interface and its uses.",
    },
    // {
    //     id: 2,
    //     title: "Event_2",
    //     edate: {
    //         date: "01",
    //         month: "September",
    //         year: "2022",
    //     },
    //     image: 'https://res.cloudinary.com/dotl5onov/image/upload/v1663477049/bmsce_acm/imgg_nhelud.png',
    //     status: "Completed",
    //     label: "Talk",
    //     description: "lorem epsum etsum, lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum,z"
    // },
    // {
    //     id: 3,
    //     title: "Event_3",
    //     edate: {
    //         date: "31",
    //         month: "October",
    //         year: "2023",
    //     },
    //     image: 'https://res.cloudinary.com/dotl5onov/image/upload/v1663477049/bmsce_acm/imgg_nhelud.png',
    //     status: "Completed",
    //     label: "Talk",
    //     description: "lorem epsum etsum, lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum,z"
    // },
    // {
    //     id: 4,
    //     title: "Event_4",
    //     edate: {
    //         date: "5",
    //         month: "November",
    //         year: "2023",
    //     },
    //     image: 'https://res.cloudinary.com/dotl5onov/image/upload/v1663477049/bmsce_acm/imgg_nhelud.png',
    //     status: "Completed",
    //     label: "Talk",
    //     description: "lorem epsum etsum, lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum,z"
    // },
    // {
    //     id: 5,
    //     title: "Event_5",
    //     edate: {
    //         date: "25",
    //         month: "January",
    //         year: "2024",
    //     },
    //     image: 'https://res.cloudinary.com/dotl5onov/image/upload/v1663477049/bmsce_acm/imgg_nhelud.png',
    //     status: "Up coming",
    //     label: "Talk",
    //     description: "lorem epsum etsum, lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum lorem epsum etsum,z"
    // },
];

export function getAllEvents() {
    return allEvents;
}

export function getEvent(id) {
    return allEvents[id];
}

export function getFilteredEvents(id) {
    return allEvents.filter(function (event) { return event.id === id; });
}
