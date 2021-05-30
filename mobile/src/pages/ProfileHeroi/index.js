import React, { useState, useEffect } from 'react'
import { Alert, Modal, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather, Entypo } from '@expo/vector-icons'

import styles from './styles'
import api from '../../services/api'

export default function profile() {

	const navigation = useNavigation()
	const route = useRoute()


	const [heroi, setHerois] = useState([])

	const Heroi = route.params.heroi

	const [isModalVisible, setModalVisible] = useState(false);

	const [inputValue, setInputValue] = useState("");

	const toggleModalVisibility = () => {
		setModalVisible(!isModalVisible)
	};

	const [isModal2Visible, setModal2Visible] = useState(false);

	const [input2Value, setInput2Value] = useState("");

	const toggleModal2Visibility = () => {
		setModal2Visible(!isModal2Visible)
	};

	const [isModal3Visible, setModal3Visible] = useState(false);

	const toggleModal3Visibility = () => {
		setModal3Visible(!isModal3Visible)
	};

	const [selectedValue, setSelectedValue] = useState('forc')
	const [selected2Value, setSelected2Value] = useState('forc')

	async function loadHerois() {
		setHerois(Heroi)
	}

	async function danoHp(dano) {
		if (dano > heroi.hp) {
			dano = heroi.hp
		}
		const res = await api.put(`/herois/upHp`, { alteracao: -dano, id: heroi.codheroi })

		setHerois(res.data)

		toggleModal2Visibility()
		setInput2Value('')

	}

	async function curaHp(cura) {
		if (heroi.hp + cura > heroi.hpMaxima) {
			cura = heroi.hpMaxima - heroi.hp
		}
		const res = await api.put(`/herois/upHp`, { alteracao: cura, id: heroi.codheroi })

		setHerois(res.data)

		toggleModalVisibility()
		setInputValue('')
	}

	async function levelUp(valor1, valor2) {
		const res = await api.put('/herois/upXp', { atributoUm: valor1, atributoDois: valor2, id: heroi.codheroi })
		setHerois(res.data)

		toggleModal3Visibility()
	}

	useEffect(() => {
		loadHerois()
	}, [])

	function alertaOpcao() {

		return (
			Alert.alert('Volte mais tarde!', `
        As mais variadas opções serão incluidas em versões futuras do aplicativo.`,
				[{
					text: 'OK',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				}
				])
		)
	}


	function navigateBack() {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>

			<View style={styles.imagem}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
					<TouchableOpacity onPress={navigateBack}>
						<Feather name='arrow-left' size={30} color='#47525E' />
					</TouchableOpacity>

					<View style={{ alignItems: 'center' }}>
						<Text style={styles.heroiNome}>{heroi.nome}</Text>
						<Text style={styles.heroiNivel}>Nivel: {heroi.nivel}</Text>
					</View>

					<TouchableOpacity onPress={() => (alertaOpcao())}>
						<Entypo name='dots-three-vertical' size={30} color='#47525E' />
					</TouchableOpacity>

				</View>

			</View>


			<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

				<Text style={styles.caracteristicasTitle}>HP: </Text>
				<Text style={styles.caracteristicas}>{heroi.hp}/{heroi.hpMaxima}</Text>
				<Text style={[{ marginLeft: 20 }, styles.caracteristicasTitle]}>CA: </Text>
				<Text style={styles.caracteristicas}>{heroi.ca}</Text>

			</View>

			<View style={styles.tr}></View>
			<View>
				<View style={{ alignSelf: 'center', flexDirection: 'row' }}>
					<View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10 }}>
						<Text style={styles.caracteristicasTitle}>RAÇA: </Text>
						<Text style={styles.caracteristicas}>{heroi.raca}</Text>
					</View>
					<View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10 }}>
						<Text style={[styles.caracteristicasTitle, { marginLeft: 10 }]}>CLASSE: </Text>
						<Text style={styles.caracteristicas}>{heroi.classe}</Text>
					</View>
				</View>

				<View style={{ alignSelf: 'center', flexDirection: 'row', marginVertical: 10 }}>
					<Text style={styles.caracteristicasTitle}>ALINHAMENTO: </Text>
					<Text style={styles.caracteristicas}>{heroi.alinhamento}</Text>
				</View>
			</View>

			<View style={styles.tr}></View>

			<View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>

				<Text style={styles.title}>Atributos</Text>

				<View style={{ flexDirection: 'row' }}>
					<Text style={[styles.caracteristicasTitle, { marginVertical: 7 }]}>FORÇA: </Text>
					<Text style={styles.atributos}>{heroi.forc}</Text>

					<Text style={[styles.caracteristicasTitle, { marginLeft: 10, marginVertical: 7 }]}>CONSTITUIÇÃO: </Text>
					<Text style={styles.atributos}>{heroi.con}</Text>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<Text style={[styles.caracteristicasTitle, { marginVertical: 7 }]}>DESTREZA: </Text>
					<Text style={styles.atributos}>{heroi.des}</Text>

					<Text style={[styles.caracteristicasTitle, { marginLeft: 10, marginVertical: 7 }]}>CARISMA: </Text>
					<Text style={styles.atributos}>{heroi.car}</Text>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<Text style={[styles.caracteristicasTitle, { marginVertical: 7 }]}>SABEDORIA: </Text>
					<Text style={styles.atributos}>{heroi.sab}</Text>

					<Text style={[styles.caracteristicasTitle, { marginLeft: 10, marginVertical: 7 }]}>INTELIGÊNCIA: </Text>
					<Text style={styles.atributos}>{heroi.int}</Text>
				</View>

			</View>
			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity
					style={[styles.btnHp, { marginLeft: '20%' }]}
					onPress={toggleModalVisibility}
				>
					<Text style={styles.btnHpTexto}>Cura</Text>

					<Modal animationType="slide"
						transparent visible={isModalVisible}
						presentationStyle="overFullScreen"
						onRequestClose={toggleModalVisibility}
						onDismiss={toggleModalVisibility}
					>
						<View style={styles.viewWrapper}>
							<View style={styles.modalView}>
								<TextInput placeholder="Digite a Cura Recebida"
									value={inputValue} style={styles.textInput}
									onChangeText={(value) => setInputValue(value)}
									keyboardType='number-pad'
								/>
								<TouchableOpacity style={styles.btnModal} title="Close" onPress={() => (curaHp(inputValue))}>
									<Text style={styles.btnModalTexto}>Lançar Cura</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>

				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.btnHp, { marginRight: '20%', marginLeft: '10%' }]}
					onPress={toggleModal2Visibility}
				>
					<Text style={styles.btnHpTexto}>Dano</Text>

					<Modal animationType="slide"
						transparent visible={isModal2Visible}
						presentationStyle="overFullScreen"
						onRequestClose={toggleModal2Visibility}
						onDismiss={toggleModal2Visibility}
					>
						<View style={styles.viewWrapper}>
							<View style={styles.modalView}>
								<TextInput placeholder="Digite o Dano Sofrido"
									value={input2Value} style={styles.textInput}
									onChangeText={(value) => setInput2Value(value)}
									keyboardType='number-pad'
								/>
								<TouchableOpacity style={styles.btnModal} title="Close" onPress={() => (danoHp(input2Value))}>
									<Text style={styles.btnModalTexto}>Causar Dano</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>

				</TouchableOpacity>
			</View>

			<View>
				<TouchableOpacity
					style={styles.btnLevelUp}
					onPress={toggleModal3Visibility}
				>
					<Text style={[styles.title, { color: '#f0f0f5', }]}>Level Up</Text>

					<Modal animationType="slide"
						transparent visible={isModal3Visible}
						presentationStyle="overFullScreen"
						onRequestClose={toggleModal3Visibility}
						onDismiss={toggleModal3Visibility}
					>
						<View style={styles.viewWrapper}>
							<View style={styles.modalView2}>
								<Text style={styles.actionText}>Escolha os atributos a serem melhorados</Text>
								< View style={styles.picker}>
									<Picker
										selectedValue={selectedValue}
										onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
									>
										<Picker.Item label="Força" value="forc" />
										<Picker.Item label="Constituição" value="con" />
										<Picker.Item label="Destreza" value="des" />
										<Picker.Item label="Carisma" value="car" />
										<Picker.Item label="Sabedoria" value="sab" />
										<Picker.Item label="Inteligencia" value="int" />
									</Picker>
									{console.log(selectedValue)}
								</View>

								< View style={styles.picker}>
									<Picker
										selectedValue={selected2Value}
										onValueChange={(itemValue, itemIndex) => setSelected2Value(itemValue)}
									>
										<Picker.Item label="Força" value="forc" />
										<Picker.Item label="Constituição" value="con" />
										<Picker.Item label="Destreza" value="des" />
										<Picker.Item label="Carisma" value="car" />
										<Picker.Item label="Sabedoria" value="sab" />
										<Picker.Item label="Inteligencia" value="int" />
									</Picker>
								</View>

								<TouchableOpacity style={[styles.btnModal,{width: '40%'}]} title="Close" onPress={() => (levelUp(selectedValue, selected2Value))}>
									<Text style={styles.btnModalTexto}>Aumentar Level</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</TouchableOpacity>
			</View>

		</View>

	)
}