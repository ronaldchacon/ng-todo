class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = current_user.tasks.sort_by(&:due_date)
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

  def delete_all
    respond_with Task.where({ id: params[:ids] }).destroy_all
  end

  private

  def task_params
    params.require(:task).permit(:name, :due_date, :notes, :is_completed)
  end
end
