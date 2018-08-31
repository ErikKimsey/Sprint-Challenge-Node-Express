const express = require('express');
const router = express.Router();
const actionModel = require('../data/helpers/actionModel.js');

router.get('/', (req, res)=>{
    actionModel.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: `There was a problem fetching actions.`})
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    actionModel.get(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem fetching action ${id}.` })
        });
});

router.post('/', (req, res) => {
    let action = req.body;
    actionModel.insert(action)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem creating an action.` })
        });
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    
    actionModel.update(req.params.id, req.body)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem updating this action.` })
        });
});

router.delete('/:id', (req, res) => {
    console.log(req.body);

    actionModel.remove(req.params.id)
        .then(action => {
            res.status(204).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem updating this action.` })
        });
});

module.exports = router;


/**
 * 
id: number, no need to provide it when creating posts, the database will automatically generate it.
project_id: number, required, must be the id of an existing project.
description: string, up to 128 characters long, required.
notes: string, no size limit, required. Used to record additional notes or requirements to complete the action.
completed: boolean to indicate if the action has been completed, not required
 */
