User.destroy_all

tom = User.create(
  first_name: "Tom",
  last_name: "Tobar",
  email: "tom@example.com",
  password: "tombomb",
  password_confirmation: "tombomb",
)

ash = User.create(
  first_name: "Ash",
  last_name: "Tobar",
  email: "ash@example.com",
  password: "mommytoad",
  password_confirmation: "mommytoad",
)

kitty = User.create(
  first_name: "Kitty",
  last_name: "Tobar",
  email: "kitty@example.com",
  password: "kitty",
  password_confirmation: "kitty",
)

buddy = User.create(
  first_name: "Buddy",
  last_name: "Tobar",
  email: "buddy@example.com",
  password: "buddybear",
  password_confirmation: "buddybear",
)

quinny = User.create(
  first_name: "Quinny",
  last_name: "Tobar",
  email: "quinny@example.com",
  password: "batgirl",
  password_confirmation: "batgirl",
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


User.all.each do |user|
    rand(2..6).times do 
        Blog.create(
            user_id: user.id,
            title: Faker::Book.title,
            content: Faker::Lorem.paragraphs[0]
        )
    end
end

# Randomly add like to blogs for each user in db
Blog.all.each do |blog|
  User.all.each do |user|
    add_like = [true, false]
    if blog.user_id != user.id && add_like.sample
      Like.create(user_id: user.id, blog_id: blog.id)
    end
  end
end

