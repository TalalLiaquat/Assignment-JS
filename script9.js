
const softwareCompany = {
    name: "Tech Innovators Inc.",
    founder: "John Smith",
    yearFounded: 2005,
    products: ["InnoSuite", "DataFlow", "ConnectX"]
  };

  console.log("Company Name:", softwareCompany.name);
  console.log("Founder:", softwareCompany.founder);
  console.log("Year Founded:", softwareCompany.yearFounded);
  console.log("Products:", softwareCompany.products.join("r, "));
  




  // Assignment 9(2)


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    drivefunction() {
      console.log("The " + this.brand + " " + this.model + " is being driven.");
    }
  };
  car.drivefunction();
  