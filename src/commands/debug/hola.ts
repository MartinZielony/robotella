import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('hola')
    .setDescription('Saluda a robotella.')
    .addStringOption((option) =>
        option
            .setName('mensaje')
            .setDescription('Le da a robotella un mensaje con el cual responder.')
            .setMinLength(1)
            .setMaxLength(2000)
            .setRequired(false)
    )

export default command(meta, ({ interaction }) => {
    const message = interaction.options.getString('message')

    return interaction.reply({
        ephemeral: true,
        content: message ?? 'HOLA!!'
    })
})