class RemoveTagsFromBlogs < ActiveRecord::Migration[6.1]
  def change
    remove_column :blogs, :tags, :string
  end
end
