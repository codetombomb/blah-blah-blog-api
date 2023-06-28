class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :num_followers
  has_many :followers

  def num_followers
    self.object.followers.length
  end
end
