class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :num_likes, :tags
  belongs_to :user

  def num_likes
    self.object.likes.length
  end

end
