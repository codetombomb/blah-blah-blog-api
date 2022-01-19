class User < ApplicationRecord
    has_secure_password
    has_many :blogs
    has_many :follower_connections,
    class_name: "Connection",
    foreign_key: "follower_id",
    dependent: :destroy

  has_many :followees, through: :follower_connections

  has_many :followee_connections,
    class_name: "Connection",
    foreign_key: "followee_id",
    dependent: :destroy

  has_many :followers, through: :followee_connections

  def follow(user)
    followees << user
  end

  def unfollow(followed_user)
    followees.delete followed_user
  end
end
