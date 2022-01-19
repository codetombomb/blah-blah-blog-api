User.destroy_all

tom = User.create(
  first_name: "Tom",
  last_name: "Tobar",
  email: "tom@example.com",
  password_digest: "tombomb",
)

ash = User.create(
  first_name: "Ash",
  last_name: "Tobar",
  email: "ash@example.com",
  password_digest: "mommytoad",
)

kitty = User.create(
  first_name: "Kitty",
  last_name: "Tobar",
  email: "kitty@example.com",
  password_digest: "kitty",
)

buddy = User.create(
  first_name: "Buddy",
  last_name: "Tobar",
  email: "buddy@example.com",
  password_digest: "buddybear",
)

quinny = User.create(
  first_name: "Quinny",
  last_name: "Tobar",
  email: "quinny@example.com",
  password_digest: "batgirl",
)

tom.follow(ash)
tom.follow(kitty)
tom.follow(buddy)
tom.follow(quinny)

ash.follow(tom)
ash.follow(kitty)
ash.follow(buddy)
ash.follow(quinny)

kitty.follow(ash)
kitty.follow(tom)
kitty.follow(buddy)
kitty.follow(quinny)

buddy.follow(ash)
buddy.follow(kitty)
buddy.follow(tom)
buddy.follow(quinny)

quinny.follow(ash)
quinny.follow(kitty)
quinny.follow(buddy)
quinny.follow(tom)