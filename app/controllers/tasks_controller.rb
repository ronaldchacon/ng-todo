class TasksController < ApplicationController
  before_action :authenticate_user!

  def index
    @tasks = current_user.tasks
    respond_with @tasks
  end

  def show
    @task = current_user.tasks.find(params[:id])
    respond_with @task
  end

  def create
    respond_with Task.create(task_params.merge({ user: current_user }))
  end

  def update
    @task = current_user.tasks.find(params[:id])
    @task.update(task_params)
    respond_with @task
  end

  def destroy
    respond_with Task.find(params[:id]).destroy
  end

  def delete_all
    respond_with Task.where({ id: params[:ids] }).destroy_all
  end

  private

  def task_params
    params.require(:task).permit(:name, :due_date, :notes, :is_completed)
  end
end
