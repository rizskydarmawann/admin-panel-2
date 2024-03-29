import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";
import img from "../../../../../../public/7.jpg";
import Image from "next/image";

const AddProductPage = () => {
  return (
    <div
      className={`${styles.container} bg-[var(--bgSoft)] p-[20px] rounded-[10px] mt-[20px] `}
    >
      <form className={`${styles.form} flex flex-wrap justify-between`}>
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className={`${styles.formChild} ${styles.formChildInput} `}
        />
        <select name="cat" id="cat" className={`${styles.formChild} ${styles.formChildInput}`}>
          <option value="general">Choose a Category</option>
          <option value="computer">Computer</option>
          <option value="tv">TV</option>
          <option value="keyboard">Keyboard</option>
          <option value="modem">Modem</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className={`${styles.formChild} ${styles.formChildInput}`}
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className={`${styles.formChild} ${styles.formChildInput}`}
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          required
          className={`${styles.formChild} ${styles.formChildInput}`}
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          required
          className={`${styles.formChild} ${styles.formChildInput}`}
        />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="description"
          className={`${styles.formChild} w-[100%] p-[30px]`}
        ></textarea>
        <button type="submit" className={` w-[100%] p-[30px] !bg-[teal] !text-[var(--text)] !rounded-[5px] cursor-pointer ${styles.formChild}`}>
          Submit
        </button>
      </form>
      <ul role="list">
        <li class="group/item hover:bg-indigo-100 ...">
          <Image src={img} alt="" width={40} height={40} />
          <div className="text-[green]">
            <a href="{person.url}">{`person.name`}</a>
            <p>{`person.title`}</p>
          </div>
          <a
            className="group/edit invisible hover:bg-indigo-200 group-hover/item:visible group-hover/item:rounded-[50px] flex group-hover/item:scale-[80%] group-hover/item:duration-[2000ms] group-hover/item:ease-out group-hover/item:infinite"
            href="tel:bambang"
          >
            <span className="group-hover/edit:text-yellow-700 group-hover/edit:font-bold">
              Call
            </span>
            <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-red-500 group-hover/edit:bg-[yellow]"></svg>
          </a>
        </li>
        {`/each`}
      </ul>
    </div>
  );
};

export default AddProductPage;
