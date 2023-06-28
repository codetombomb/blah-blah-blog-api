class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :num_followers, :following
  has_many :followers
  has_many :blogs
  has_many :liked_blogs

  def num_followers
    self.object.followers.length
  end

  def following
    self.object.followees.map do |follow|
      {
        id: follow.id,
        first_name: follow.first_name,
        last_name: follow.last_name
      }
    end
  end
end
