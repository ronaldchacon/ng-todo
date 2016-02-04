class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = current_user.tasks.sort_by(&:updated_at)
    respond_with @tasks
  end

  def show
    @task = current_user.tasks.find(params[:id])
    respond_with @task
  end

  def create
  end

  def update
    @task = current_user.tasks.find(params[:id])
    @task.update(task_params)
    respond_with @task
  end

  def delete
  end

  private

  def task_params
    params.require(:task).permit(:name, :due_date, :notes, :is_completed)
  end
end
