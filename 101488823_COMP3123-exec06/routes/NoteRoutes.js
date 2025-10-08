const noteModel = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.noteTitle || !req.body.noteDescription) {
        return res.status(400).send({
            message: "Note title and description are required"
        });
    }
    
    //TODO - Write your code here to save the note
    try {
        const note = new noteModel({
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription,
            priority: req.body.priority || 'LOW'
        });
        
        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error occurred while creating the note"
        });
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error occurred while retrieving notes"
        });
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const note = await noteModel.findById(req.params.noteId);
        
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error retrieving note with id " + req.params.noteId
        });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.noteTitle && !req.body.noteDescription && !req.body.priority) {
        return res.status(400).send({
            message: "At least one field must be provided for update"
        });
    }
    
    //TODO - Write your code here to update the note using noteid
    try {
        const updateData = {
            ...req.body,
            dateUpdated: Date.now()
        };
        
        const note = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            updateData,
            { new: true, runValidators: true }
        );
        
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error updating note with id " + req.params.noteId
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId);
        
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        
        res.status(200).send({
            message: "Note deleted successfully"
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Error deleting note with id " + req.params.noteId
        });
    }
});

module.exports = noteRoutes;
