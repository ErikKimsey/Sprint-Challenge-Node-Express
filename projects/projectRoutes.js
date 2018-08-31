const express = require('express');
const router = express.Router();
const projectModel = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
    projectModel.get()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem fetching these projects.` })
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    projectModel.getProjectActions(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem fetching project actions of project ${id}.` })
        });
});

router.post('/', (req, res) => {
    let project = req.body;
    projectModel.insert(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem creating this project.` })
        });
});

router.put('/:id', (req, res) => {
    console.log(req.body);

    projectModel.update(req.params.id, req.body)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem updating this project.` })
        });
});

router.delete('/:id', (req, res) => {
    console.log(req.body);

    projectModel.remove(req.params.id)
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
name: string, up to 128 characters long, required.
description: string, no size limit, required.
completed: boolean to indicate if the project has been completed, not required
 */
