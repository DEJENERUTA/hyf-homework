use hyf19;

select * from task;
select * from status;
-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into task 
	(title, description, created, updated, due_date, status_id, user_id) 
		values (`${title}`, `${description}`, `${created}`, `${updated}`, `${due_date}`, `${status_id}`, `${user_id}`);

--  Change the title of a task with these attributes: taskID, newTitle
update task 
	set title = `${newTitle}` 
		where id = `${taskID}`;

--  Change the task due date with these attributes: taskID, newDueDate
update task 
	set due_date = `${newDueDate}` 
		where id = `${taskID}`;

 --  Change the task status with these attributes: taskID, newStatus
update task
	inner join 
		status on status.id = tassk.status_id
	set task.status_id = status.id 
		where status.name = `${newStatus}` and task.id = `${taskID}`;

--  Mark a task as complete with this attribute: taskID
update task 
	inner join 
		status on status.id = task.status_id
	set task.status_id = status.id 
		where status.name = 'Done' and task.id = `${taskID}`;

--  Delete task with this attribute: taskID
delete from task 
	where id = `${taskID}`;