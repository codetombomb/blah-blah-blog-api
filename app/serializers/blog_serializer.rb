class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :user, :content, :num_likes, :read_time
  has_many :tags

  def user
    u = self.object.user
    {id: u.id, first_name: u.first_name, last_name: u.last_name}
  end

  def num_likes
    self.object.likes.length
  end

  def read_time
    total_characters = self.object.content.length + self.object.title.length
    average_reading_rate = 200
    total_characters / average_reading_rate
  end

end
