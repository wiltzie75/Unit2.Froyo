// Function prompting a user enter the flavors of froyo everyone ate and then tallying up the total for each.
tableListing = () => {
    // User prompted to enter flavors
    const vistor = prompt(
        "Please enter a list of comma-separated froyo flavors."
    );

    // array is created from user prompt and empty object created.
    const flavorsArray = vistor.split(",");
    const flavors = {};

    // for loop that cycles through object and assigns value.
    for (let i = 0; i < flavorsArray.length; i++) {
        const flavVal = flavorsArray[i];
        if (flavors[flavVal]){
        flavors[flavVal] += 1;
        } else {
        flavors[flavVal] = 1;
        }
    }
    console.table(flavors);
}

tableListing();

