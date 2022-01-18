import { useRouter } from 'next/router'
import Login from "../../src/components/login/reset-password-form";
import Layout from "../../src/components/Layout";
function App(props) {
    const router = useRouter()
    const { slug  } = router.query
	return (
		<Layout>
	    	<div class="relative h-screen overflow-x-hidden bg-blue px-6 ">
				<div class="h-screen flex justify-center items-center">
					<div className='text-white'>
						<h2>Скинути пароль</h2>
             			<p className='mb-3'>Введіть новий пароль для свого облікового запису нижче.</p>
						<Login reset={slug}/>
					</div>
				</div>
			</div>
		</Layout>		

	);
}
export default App;


