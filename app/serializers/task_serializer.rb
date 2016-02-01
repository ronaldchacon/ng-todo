class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :due_date, :notes, :created_at, :updated_at,
    :is_completed

  belongs_to :user
end
