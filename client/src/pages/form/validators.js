const validator = form => {
  const errors = {};
  if (form.name) {
    if (form.name.trim() === "") {
      errors.name = "Name cannot be empty";
    } else if (form.name.match(/[^a-zA-Z]/)) {
      errors.name = "Name must be alphabetical";
    } else if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    } else if (form.name.length > 30) {
      errors.name = "name must be less than 30 characters long";
    }
  }
  if (form.hp) {
    if (form.hp.trim() === "") {
      errors.hp = "HP cannot be empty";
    } else if (/^\D/.test(form.hp)) {
      errors.hp = "HP must be numeric";
    } else if (form.hp < 1) {
      errors.hp = "HP must be at least 1";
    } else if (form.hp > 255) {
      errors.hp = "HP must be less than 255";
    }
  }
  if (form.attack) {
    if (form.attack.trim() === "") {
      errors.attack = "Attack cannot be empty";
    } else if (form.attack.match(/[^0-9]/)) {
      errors.attack = "Attack must be numeric";
    } else if (form.attack < 5) {
      errors.attack = "Attack must be at least 5";
    } else if (form.attack > 255) {
      errors.attack = "Attack must be less than 255";
    }
  }
  if (form.defense) {
    if (form.defense.trim() === "") {
      errors.defense = "Defense cannot be empty";
    } else if (form.defense.match(/[^0-9]/)) {
      errors.defense = "Defense must be numeric";
    } else if (form.defense < 5) {
      errors.defense = "Defense must be at least 5";
    } else if (form.defense > 255) {
      errors.defense = "Defense must be less than 255";
    }
  }
  if (form.speed) {
    if (form.speed.trim() === "") {
      errors.speed = "Speed cannot be empty";
    } else if (form.speed.match(/[^0-9]/)) {
      errors.speed = "Speed must be numeric";
    } else if (form.speed < 5) {
      errors.speed = "Speed must be at least 5";
    } else if (form.speed > 255) {
      errors.speed = "Speed must be less than 255";
    }
  }
  if (form.height) {
    if (form.height.trim() === "") {
      errors.height = "Height cannot be empty";
    } else if (form.height.match(/[^0-9]/)) {
      errors.height = "Height must be numeric";
    } else if (form.height < 1) {
      errors.height = "Height must be at least 1m";
    } else if (form.height > 25) {
      errors.height = "Height must be less than 25m";
    }
  }
  if (form.weight) {
    if (form.weight.trim() === "") {
      errors.weight = "Weight cannot be empty";
    } else if (form.weight.match(/[^0-9]/)) {
      errors.weight = "Weight must be numeric";
    } else if (form.weight < 1) {
      errors.weight = "Weight must be at least 1kg";
    } else if (form.weight > 25) {
      errors.weight = "Weight must be less than 1000kg";
    }
  }
  if (form.img) {
    if (form.img.trim() === "") {
      errors.img = "Image cannot be empty";
    } else if (
      !/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])*((\.jpg)|(\.png)|(\.svg))\/?(\.webp)?/.test(
        form.img
      )
    ) {
      errors.img = "Image must be valid URL";
    }
  }
  if (form.types) {
    if (form.types.length === 0) {
      errors.types = "Must select at least one type";
    }
  }
  return errors;
};

export default validator;
