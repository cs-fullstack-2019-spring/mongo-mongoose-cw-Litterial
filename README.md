## POINTS: 2.0
## KEY: Great Job overall! Note since we made animal ID unique in our model, we could safely use findOneAndUpdate() as opposed to updateMany(). I didn't dock u points though. Great work.

Model.findOneAndUpdate(conditions, update, options, (error, doc) => {
  // error: any errors that occurred
  // doc: the document before updates are applied if `new: false`, or after updates if `new = true`
});

# Mongo/Mongoose Graded Classwork

### Exercise 1: Create a Web API for ZOO Animals

* Create a new Express web service called ZooWeb (manually, or with the Express Generator)
* Sign into your mongoDB account, and create a new collection called ```zooanimals``` (NOTE the connection String that gets generated!)
* Create a Mongoose data model called ```ZooAnimal``` with the following fields:

```
animal_id
animal_type
animal_description
```
Implement the following endpoints for your ZooWeb web service:
```/zoowebapi/animal/add/ANIMAL_ID/ANIMAL_TYPE/ANIMAL_DESCRIPTION``` That will add an animal

```/zoowebapi/animal/get/ANIMAL_ID``` That will get an animal by id and return the JSON retrieved

```/zoowebapi/animal/update/ANIMAL_ID/ANIMAL_TYPE/ANIMAL_DESCRIPTION``` That will update the TYPE and DESCRIPTION of the animal with the provided ID and return the updated JSON

```/zoowebapi/animal/del/ANIMAL_ID``` That will delete an animal


### Extra:
Convert endpoints above to a true RESTful API by eliminating the verbs in the endpoints and using HTTP 










