class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.integer :follower_id
      t.integer :followee_id

      t.timestamps
    end
    add_index :connections, :follower_id
    add_index :connections, :followee_id
    add_index :connections, [:follower_id, :followee_id], unique: true
  end
end