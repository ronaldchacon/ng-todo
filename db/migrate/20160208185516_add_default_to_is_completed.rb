class AddDefaultToIsCompleted < ActiveRecord::Migration
  def change
    change_column :tasks, :is_completed, :boolean, default: false
  end
end
