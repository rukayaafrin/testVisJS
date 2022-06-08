let nodes = [
    {
    id: 1,
      label: "Company 1",
      title: "Country: " + "Algeria" + "<br>" + "Team: " + "Club Africain",
      value: 100,
      group: 24

    },
    {
        id: 2,
        label: "Shareholder 1",
        title: "Something: " + "Algeria" + "<br>" + "Team: " + "Club Africain",
        value: 70,
        group: 3
    
    },
    {
        id: 3,
        label: "Shareholder 2",
        title: "Something: " + "Algeria" + "<br>" + "Team: " + "Club Africain",
        value: 10,
        group: 3
    
    },
    {
        id: 4,
        label: "Shareholder 3",
        title: "Something: " + "Algeria" + "<br>" + "Team: " + "Club Africain",
        value: 20,
        group: 3
    
    },
    {
        id: 5,
        label: "Company 2",
        title: "Something: " + "Algeria" + "<br>" + "Team: " + "Club Africain",
        value: 100,
        group: 24
    
    }

];
let edges = [
    {
         from: 1, to: 2
    },
    {
        from: 1, to: 3
   },
   {
    from: 1, to: 4
},
{
    from: 1, to: 5
},
{
    from: 3, to: 5
}

];
