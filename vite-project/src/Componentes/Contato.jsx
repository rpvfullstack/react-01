import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

export function Contato() {
  return (
    // <h1>Contato</h1>

    // <h1>{props.nomePagina}</h1>

    <Box>
      <Flex>
        <Center
          w="100%"
          bg="white"
          top={100}
          borderRadius={5}
          p="2"
          boxShadow={"0 1px 2px #ccc"}
        >
          <FormControl>

            <HStack>
              <Box>
                <FormLabel>Nome Completo</FormLabel>
                <Input id='nome' placeholder='Nome Completo' />
                
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input id='email' placeholder='E-mail' />  
              </Box>
             
            </HStack>

            <HStack>
              <Box>
                <FormLabel>Data Nascimento</FormLabel>
                <Input id='nasc' placeholder='Data de Nascimento' />
              </Box>
              <Box>
                <FormLabel>Naturalidade</FormLabel>
                <Input id='natural' placeholder='Naturalidade' />
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormLabel>Celular</FormLabel>
                <Input id='cel' type="number" placeholder='Celular' />
              </Box>
              <Box>
                <FormLabel>Telefone</FormLabel>
                <Input id='tel' type="number" placeholder='Telefone' />
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormLabel>Endereço</FormLabel>
                <Input id='endereco' placeholder='Endereço' />
              </Box>
              <Box>
                <FormLabel>Cidade</FormLabel>
                <Input id='cidade' placeholder='Cidade' />
              </Box>
            </HStack>

            <HStack>
              <Box>
                <FormLabel>Sexo</FormLabel>
                <RadioGroup>
                <HStack>
                  <Radio value="Masculino">Masculino</Radio>
                  <Radio value="Feminino">Feminino</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack>
              <Button>
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}
