-- :name insert-counter
-- :command :returning-execute
-- :result :one
insert into counters (counter_id, user_id)
values (:counter-id, :user-id) returning *;

-- :name counter-by-id
-- :result :one
select * from counters
where counter_id = :id;

-- :name counter-by-uuid
-- :result :one
select * from counters
where user_id = :user-id;

-- :name counter-by-share-key
-- :result :one
select * from counters
where share_key = :share-key;

-- :name all-counters
select * from counters
order by counter_id asc;

-- :name update-counter-by-id
-- :command :returning-execute
-- :result :one
update counters
set counter_value = counter_value + :change
where counter_id = :id returning *;
