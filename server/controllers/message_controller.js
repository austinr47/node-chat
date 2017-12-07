let messages = [];
let id = 0;

module.exports = {
    create(req, res){
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).json( messages );
    },

    read(req, res) {
        console.log('You sent me this data', req.body);
        res.status(200).json(messages);
    },

    // update(req, res){
    //     console.log('You sent me this data', req.body);
    //     const messId = req.params.id;
    //     const messIndex = messages.findIndex(message => message.id === parseInt(messId, 10));
    //     messages[ messIndex ] = {
    //         id: messages[messIndex].id,
    //         text: req.body || messages[messIndex].text,
    //         time: messages[messIndex].req.body
    //       };
    //       res.json(messages);
    // },
    update: ( req, res ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];
      
        messages[ messageIndex ] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };
      
        res.status(200).send( messages );
      },

    delete(req, res){
        console.log('You sent me this data', req.body);
        const messId = req.params.id;
        const messIndex = messages.findIndex(message => message.id === parseInt(messId, 10));
        messages.splice(messIndex, 1);
        res.json(messages);
    }
}


